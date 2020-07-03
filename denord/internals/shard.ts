import { IdentifyCommand } from './../structure/IdentifyCommand.ts';
import {
	connectWebSocket,
	isWebSocketCloseEvent,
	WebSocket,
} from 'https://deno.land/std@0.59.0/ws/mod.ts';
import {
	ShardMessageType,
	ShardPayload,
	ShardMessage,
} from './ShardMessage.ts';
import {
	GatewayPayload,
	GatewayPayloadData,
	unwrapGatewayPayload,
	wrapGatewayPayload,
} from '../structure/GatewayPayload.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { wait } from '../../amq/promise.ts';
import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { GatewayClose } from '../enum/GatewayClose.ts';

const parent = createParent();
const discord = createDiscordSocket();

log('AWAKE');
parent.send(ShardMessageType.INIT_COMPLETE);
log('WAITING');

function createParent() {
	let isConnected = false;

	// @ts-ignore
	onmessage = (event: MessageEvent) => onParentMessage(event.data);

	return {
		send<T extends ShardMessageType>(type: T, payload?: ShardPayload<T>) {
			const message = payload ? { type, ...payload } : { type };
			// @ts-ignore
			postMessage(message);
		},

		notifyStatus(_isConnected: boolean) {
			if (isConnected === _isConnected) {
				return;
			}

			isConnected = _isConnected;

			if (isConnected) {
				this.send(ShardMessageType.CONECTED);
			} else {
				this.send(ShardMessageType.DISCONECTED);
			}
		},
	};

	function onParentMessage(x: ShardMessage) {
		switch (x.type) {
			case ShardMessageType.CONNECT:
				return discord.connect(x);
			case ShardMessageType.SEND:
				return discord.send(x.payload);
		}
	}
}

function createDiscordSocket() {
	let socket: WebSocket;
	let identify: IdentifyCommand;
	let resumeInterval = 0;
	let lastSequenceNumber = 0;
	let isResumeNeeded = false;
	let sessionId = '';
	let url = '';

	return {
		async connect(x: ShardPayload<ShardMessageType.CONNECT>) {
			log(`CONNECT(${x.id})`);
			url = x.gateway.url;
			identify = x.identify;
			return openConnection();
		},

		send,
	};

	function sendOp<T extends GatewayOpCode>(op: T, d: GatewayPayloadData<T>) {
		const payload = { op, d, t: null, s: null } as GatewayPayload;
	}

	function send(payload: GatewayPayload) {
		const raw = unwrapGatewayPayload(payload);
		const json = JSON.stringify(raw);
		return socket.send(json);
	}

	async function openConnection(isResuming = false) {
		socket = await connectWebSocket(url);
		resumeInterval = 0;

		if (isResuming) {
			await sendOp(GatewayOpCode.Resume, {
				token: identify.token,
				sessionId,
				seq: lastSequenceNumber,
			});
		} else {
			await sendOp(GatewayOpCode.Identify, identify);
		}

		for await (const message of socket) {
			if (isWebSocketCloseEvent(message)) {
				onSocketClose(message);
			} else if (typeof message === 'string') {
				const json = JSON.parse(message);
				const payload = wrapGatewayPayload(json());
				onSocketMessage(payload);
				parent.send(ShardMessageType.DISCORD_MESSAGE, { payload });
			}
		}
	}

	async function resumeConnection(): Promise<void> {
		parent.notifyStatus(false);
		log('Resume');
		isResumeNeeded = true;
		openConnection(true);
		await wait(15);

		if (isResumeNeeded) {
			return resumeConnection();
		}
	}

	async function sendHeartbeat(interval: number) {
		await wait(interval);
		sendOp(GatewayOpCode.Heartbeat, lastSequenceNumber);
		sendHeartbeat(interval);
	}

	function onSocketClose(x: { code: GatewayClose }) {
		parent.notifyStatus(false);
		log('Socket closed', x);

		switch (x.code) {
			// These error codes should just crash the projects
			case GatewayClose.AUTHENTICATION_FAILED:
			case GatewayClose.ALREADY_AUTHENTICATED:
			case GatewayClose.INVALID_API_VERSION:
			case GatewayClose.INVALID_INTENTS:
			case GatewayClose.DISALLOWED_INTENTS:
				log('Unrecoverable');
				throw new Error(
					`Discord gateway forbids reconnection. Gateway Close Event Code: ${x.code}`,
				);

			// These error codes can not be resumed but need to reconnect from start
			case GatewayClose.NOT_AUTHENTICATED:
			case GatewayClose.INVALID_SEQ:
			case GatewayClose.RATE_LIMITED:
			case GatewayClose.SESSION_TIMED_OUT:
				log('Restarting...');
				return openConnection();

			// Reconnect
			case GatewayClose.UNKNOWN_ERROR:
			case GatewayClose.UNKNOWN_OPCODE:
			case GatewayClose.DECODE_ERROR:
			case GatewayClose.INVALID_SHARD:
			case GatewayClose.SHARDING_REQUIRED:
				return resumeConnection();

			default:
				throw new Error('Dafuq is dis?');
		}
	}

	function onSocketMessage(x: GatewayPayload) {
		const isFailure =
			x.op === GatewayOpCode.Reconnect ||
			x.op === GatewayOpCode.InvalidSession;

		parent.notifyStatus(!isFailure);

		if (typeof x.s === 'number') {
			lastSequenceNumber = x.s;
		}

		switch (x.op) {
			case GatewayOpCode.Reconnect:
				return resumeConnection();
			case GatewayOpCode.InvalidSession:
				if (x.d) {
					return resumeConnection();
				} else {
					log('Invalid session');
					return openConnection();
				}
			case GatewayOpCode.Hello:
				return sendHeartbeat(x.d.heartbeatInterval);
			case GatewayOpCode.Dispatch:
				switch (x.t) {
					case DiscordEvent.RESUMED:
						isResumeNeeded = false;
						return;
					case DiscordEvent.READY:
						sessionId = x.d.sessionId;
				}
		}
	}
}

function log(...values: any[]) {
	parent.send(ShardMessageType.LOG, { values });
}
