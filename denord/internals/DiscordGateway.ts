import { Emitter } from '../../amq/async/Emitter.ts';
import { MultipleEmitter } from '../../amq/async/MultipleEmitter.ts';
import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { GatewayClose } from '../enum/GatewayClose.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { Intent } from '../enum/Intent.ts';
import { GatewayBot } from '../structure/GatewayBot.ts';
import {
	DispatchPayload,
	GatewayPayload,
} from '../structure/GatewayPayload.ts';
import { IdentifyCommand } from '../structure/IdentifyCommand.ts';
import { DiscordApi } from './DiscordApi.ts';
import { DiscordCache } from './DiscordCache.ts';
import { ShardMessage, ShardMessageType } from './ShardMessage.ts';

export async function createGateway(
	token: string,
	intents: Intent[],
	api: DiscordApi,
	cache: DiscordCache,
) {
	const gateway = await api.gatewayBot();
	const instance = new DiscordGateway(token, intents, gateway, cache);
	await instance.connect();
	return instance;
}

export class DiscordGateway {
	private readonly shards = [] as Shard[];
	private readonly connected = new Set<Shard>();

	private readonly _onClose = new Emitter<GatewayClose>();
	private readonly _onMessage = new Emitter<GatewayPayload>();
	private readonly _onDispatch = new MultipleEmitter<
		DiscordEvent,
		GatewayPayload['d']
	>();

	get first(): Shard {
		const iterator = this.connected.values();
		const first = iterator.next();
		return first.value;
	}

	get identify(): IdentifyCommand {
		const { token, intents } = this;

		return {
			token,
			intents,
			compress: false,
			properties: {
				$os: 'linux',
				$browser: 'Discordeno',
				$device: 'Discordeno',
			},
		};
	}

	constructor(
		private readonly token: string,
		private readonly intents: Intent[],
		private readonly gateway: GatewayBot,
		private readonly cache?: DiscordCache,
	) {}

	send(payload: GatewayPayload) {
		const { first } = this;

		if (!first) {
			throw new Error('Socket not ready');
		}

		return first.postMessage({
			type: ShardMessageType.SEND,
			payload,
		});
	}

	async connect() {
		this.spawnShards();
	}

	onClose(listener: (code: GatewayClose) => void) {
		return this._onClose.subscribe(listener);
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

	private processMessage(x: GatewayPayload) {
		if (x.op === GatewayOpCode.Dispatch) {
			this.feedCache(x);
		}

		this._onMessage.emit(x);

		if (x.op === GatewayOpCode.Dispatch) {
			this._onDispatch.emit(x.t, x.d);
		}
	}

	private spawnShards(shardIndex = 0) {
		const required = this.gateway.shards;

		if (shardIndex < required) {
			this.createShard(shardIndex);
			this.spawnShards(shardIndex + 1);
		}
	}

	private createShard(index: number) {
		const path = new URL('./shard.ts', import.meta.url).toString();
		const shard: Shard = new Worker(path, { type: 'module' }) as any; //, deno: true });

		shard.id = index;
		shard.onmessage = x => this.onShardMessage(x.data, shard);

		this.shards.push(shard);
	}

	private onShardMessage(x: ShardMessage, shard: Shard) {
		switch (x.type) {
			case ShardMessageType.CONECTED:
				return this.connected.add(shard);

			case ShardMessageType.DISCONECTED:
				return this.connected.delete(shard);

			case ShardMessageType.DISCORD_MESSAGE:
				return this.processMessage(x.payload);

			case ShardMessageType.LOG:
				return console.log(`[SHARD(${shard.id})]:`, ...x.values);

			case ShardMessageType.INIT_COMPLETE:
				return shard.postMessage({
					type: ShardMessageType.CONNECT,
					id: shard.id,
					gateway: this.gateway,
					identify: {
						...this.identify,
						shard: [shard.id, this.gateway.shards],
					},
				});

			default:
				throw new Error(`Unknwown shard message ${JSON.stringify(x)}`);
		}
	}

	private feedCache(x: GatewayPayload & { op: GatewayOpCode.Dispatch }) {
		switch (x.t) {
			// case DiscordEvent.HELLO:
			// 	break;
			case DiscordEvent.READY:
				return this.cache?.saveUser(x.d.user);
			// case DiscordEvent.RESUMED:
			// 	break;
			// case DiscordEvent.RECONNECT:
			// 	break;
			// case DiscordEvent.INVALID_SESSION:
			// 	break;
			case DiscordEvent.CHANNEL_CREATE:
				return this.cache?.saveChannel(x.d);
			case DiscordEvent.CHANNEL_UPDATE:
				return this.cache?.saveChannel(x.d);
			case DiscordEvent.CHANNEL_DELETE:
				return this.cache?.removeChannel(x.d.id);
			// case DiscordEvent.CHANNEL_PINS_UPDATE:
			// 	break;
			case DiscordEvent.GUILD_CREATE:
				return this.cache?.saveGuild(x.d);
			case DiscordEvent.GUILD_UPDATE:
				return this.cache?.saveGuild(x.d);
			case DiscordEvent.GUILD_DELETE:
				return this.cache?.removeGuild(x.d.id);
			case DiscordEvent.GUILD_BAN_ADD:
				return this.cache?.saveUser(x.d.user);
			case DiscordEvent.GUILD_BAN_REMOVE:
				return this.cache?.saveUser(x.d.user);
			// case DiscordEvent.GUILD_EMOJIS_UPDATE:
			// 	break;
			// case DiscordEvent.GUILD_INTEGRATIONS_UPDATE:
			// 	break;
			case DiscordEvent.GUILD_MEMBER_ADD:
				return x.d.user && this.cache?.saveUser(x.d.user);
			case DiscordEvent.GUILD_MEMBER_REMOVE:
				return this.cache?.saveUser(x.d.user);
			case DiscordEvent.GUILD_MEMBER_UPDATE:
				return this.cache?.saveUser(x.d.user);
			case DiscordEvent.GUILD_MEMBERS_CHUNK:
				return x.d.members
					.filter(x => x.user)
					.forEach(x => this.cache?.saveUser(x.user!));
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
				return this.cache?.saveUser(x.d.author);
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
				return this.cache?.saveUser(x.d);
			// case DiscordEvent.VOICE_STATE_UPDATE:
			// 	break;
			// case DiscordEvent.VOICE_SERVER_UPDATE:
			// 	break;
			// case DiscordEvent.WEBHOOKS_UPDATE:
			// 	break;
		}
	}
}

type Shard = Worker & { id: number };
