import {
	connectWebSocket,
	isWebSocketCloseEvent,
	WebSocket,
	WebSocketCloseEvent,
} from 'https://deno.land/std@0.50.0/ws/mod.ts';

import { Emitter } from '../../amq/async/Emitter.ts';
import { MultipleEmitter } from '../../amq/async/MultipleEmitter.ts';
import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { Intent } from '../enum/Intent.ts';
import { GatewayBot } from '../structure/GatewayBot.ts';
import {
	DispatchPayload,
	GatewayPayload,
	wrapGatewayPayload,
} from '../structure/GatewayPayload.ts';
import {
	IdentifyCommand,
	unwrapIdentifyCommand,
} from '../structure/IdentifyCommand.ts';
import { DiscordApi } from './DiscordApi.ts';
import { DiscordCache } from './DiscordCache.ts';

export async function createGateway(
	token: string,
	intents: Intent[],
	api: DiscordApi,
	cache: DiscordCache,
) {
	const gateway = await api.gatewayBot();
	const socket = await connectWebSocket(gateway.url);
	const instance = new DiscordGateway(token, intents, gateway, socket, cache);
	await instance.connect();
	return instance;
}

export class DiscordGateway {
	private sequenceNumber: number | null = null;
	private sessionId: string | null = null;

	private readonly _onMessage = new Emitter<GatewayPayload>();
	readonly _onDispatch = new MultipleEmitter<
		DiscordEvent,
		GatewayPayload['d']
	>();

	constructor(
		private readonly token: string,
		private readonly intents: Intent[],
		private readonly gateway: GatewayBot,
		private readonly socket: WebSocket,
		private readonly cache?: DiscordCache,
	) {}

	send<T>(payload: T) {
		return this.socket.send(JSON.stringify(payload));
	}

	async connect() {
		await this.sendIdentify();
		this.listenEvents();
	}

	onMessage(listener: (payload: GatewayPayload) => void) {
		return this._onMessage.subscribe(listener);
	}

	onDispatch<T extends DiscordEvent>(
		event: T,
		listener: (payload: DispatchPayload<T>) => void,
	) {
		return this._onDispatch.subscribe(event, listener as any);
	}

	private sendIdentify() {
		const { token, intents } = this;

		const identify: IdentifyCommand = {
			token,
			compress: false,
			properties: {
				$os: 'linux',
				$browser: 'Discordeno',
				$device: 'Discordeno',
			},
			intents,
		};

		return this.send({
			op: GatewayOpCode.Identify,
			d: unwrapIdentifyCommand(identify),
		});
	}

	private async listenEvents() {
		for await (const message of this.socket) {
			if (isWebSocketCloseEvent(message)) {
				this.onClose(message);
			} else if (typeof message === 'string') {
				const raw = JSON.parse(message);
				const payload = wrapGatewayPayload(raw);
				this.processMessage(payload);
			}
		}
	}

	private onClose(message: WebSocketCloseEvent) {
		console.log('CLOSED', message);
		// 	postDebug({ type: "websocketClose", data: { shardID, message } });
		// 	// These error codes should just crash the projects
		// 	if ([4004, 4005, 4012, 4013, 4014].includes(message.code)) {
		// 	  logRed(`Close :( ${JSON.stringify(message)}`);
		// 	  postDebug({ type: "websocketErrored", data: { shardID, message } });
		// 	  throw new Error(
		// 		"Shard.ts: Error occurred that is not resumeable or able to be reconnected.",
		// 	  );
		// 	}
		// 	// These error codes can not be resumed but need to reconnect from start
		// 	if ([4003, 4007, 4008, 4009].includes(message.code)) {
		// 	  postDebug(
		// 		{ type: "websocketReconnecting", data: { shardID, message } },
		// 	  );
		// 	  createShard(botGatewayData, identifyPayload);
		// 	} else {
		// 	  needToResume = true;
		// 	  resumeConnection(botGatewayData, identifyPayload);
		// 	}
		//   }
	}

	private processMessage(x: GatewayPayload) {
		switch (x.op) {
			case GatewayOpCode.Heartbeat:
				break;
			case GatewayOpCode.Reconnect:
				console.log('Reconnect');
			case GatewayOpCode.InvalidSession:
				console.log('Invalid Session');
				this.reconnect();
				break;
			case GatewayOpCode.Hello:
				this.sendHeartbeat(x.d.heartbeatInterval);
				break;
			case GatewayOpCode.HeartbeatAck:
				break;
			case GatewayOpCode.Dispatch:
				this.sequenceNumber = x.s;

				switch (x.t) {
					// case DiscordEvent.HELLO:
					// 	break;
					case DiscordEvent.READY:
						this.sessionId = x.d.sessionId;
						this.cache?.saveUser(x.d.user);
						break;
					// case DiscordEvent.RESUMED:
					// 	break;
					// case DiscordEvent.RECONNECT:
					// 	break;
					// case DiscordEvent.INVALID_SESSION:
					// 	break;
					case DiscordEvent.CHANNEL_CREATE:
						this.cache?.saveChannel(x.d);
						break;
					case DiscordEvent.CHANNEL_UPDATE:
						this.cache?.saveChannel(x.d);
						break;
					case DiscordEvent.CHANNEL_DELETE:
						this.cache?.removeChannel(x.d.id);
						break;
					// case DiscordEvent.CHANNEL_PINS_UPDATE:
					// 	break;
					case DiscordEvent.GUILD_CREATE:
						this.cache?.saveGuild(x.d);
						break;
					case DiscordEvent.GUILD_UPDATE:
						this.cache?.saveGuild(x.d);
						break;
					case DiscordEvent.GUILD_DELETE:
						this.cache?.removeGuild(x.d.id);
						break;
					case DiscordEvent.GUILD_BAN_ADD:
						this.cache?.saveUser(x.d.user);
						break;
					case DiscordEvent.GUILD_BAN_REMOVE:
						this.cache?.saveUser(x.d.user);
						break;
					// case DiscordEvent.GUILD_EMOJIS_UPDATE:
					// 	break;
					// case DiscordEvent.GUILD_INTEGRATIONS_UPDATE:
					// 	break;
					case DiscordEvent.GUILD_MEMBER_ADD:
						if (x.d.user) {
							this.cache?.saveUser(x.d.user);
						}
						break;
					case DiscordEvent.GUILD_MEMBER_REMOVE:
						this.cache?.saveUser(x.d.user);
						break;
					case DiscordEvent.GUILD_MEMBER_UPDATE:
						this.cache?.saveUser(x.d.user);
						break;
					case DiscordEvent.GUILD_MEMBERS_CHUNK:
						x.d.members
							.filter(x => x.user)
							.forEach(x => this.cache?.saveUser(x.user!));
						break;
					// case DiscordEvent.GUILD_ROLE_CREATE:
					// 	break;
					// case DiscordEvent.GUILD_ROLE_UPDATE:
					// 	break;
					// case DiscordEvent.GUILD_ROLE_DELETE:
					// 	break;
					// case DiscordEvent.INVITE_CREATE:
					// 	break;
					// case DiscordEvent.INVITE_DELETE:
					// 	break;
					case DiscordEvent.MESSAGE_CREATE:
						this.cache?.saveUser(x.d.author);
						break;
					// case DiscordEvent.MESSAGE_UPDATE:
					// 	break;
					// case DiscordEvent.MESSAGE_DELETE:
					// 	break;
					// case DiscordEvent.MESSAGE_DELETE_BULK:
					// 	break;
					// case DiscordEvent.MESSAGE_REACTION_ADD:
					// 	break;
					// case DiscordEvent.MESSAGE_REACTION_REMOVE:
					// 	break;
					// case DiscordEvent.MESSAGE_REACTION_REMOVE_ALL:
					// 	break;
					// case DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI:
					// 	break;
					// case DiscordEvent.PRESENCE_UPDATE:
					// 	break;
					// case DiscordEvent.TYPING_START:
					// 	break;
					case DiscordEvent.USER_UPDATE:
						this.cache?.saveUser(x.d);
						break;
					// case DiscordEvent.VOICE_STATE_UPDATE:
					// 	break;
					// case DiscordEvent.VOICE_SERVER_UPDATE:
					// 	break;
					// case DiscordEvent.WEBHOOKS_UPDATE:
					// 	break;
				}
		}

		this._onMessage.emit(x);

		if (x.op === GatewayOpCode.Dispatch) {
			this._onDispatch.emit(x.t, x.d);
		}
	}

	private async sendHeartbeat(interval: number) {
		await delay(interval);

		this.send({
			op: GatewayOpCode.Heartbeat,
			d: this.sequenceNumber,
		});

		this.sendHeartbeat(interval);
	}

	private async reconnect() {}
}

// TODO: If a client does not receive a heartbeat ack between its attempts at sending heartbeats, it should immediately terminate the connection with a non-1000 close code, reconnect, and attempt to resume.
function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
