import {
	connectWebSocket,
	isWebSocketCloseEvent,
	WebSocket,
} from 'https://deno.land/std@0.59.0/ws/mod.ts';

import { wait } from '../../amq/promise.ts';
import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { GatewayCloseCode } from '../enum/GatewayClose.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { WebSocketCloseCode } from '../enum/WebSocketCloseCode.ts';
import { RawGatewayPayload } from '../raw/RawGatewayPayload.ts';
import {
	GatewayPayload,
	GatewayPayloadData,
	unwrapGatewayPayload,
	wrapGatewayPayload,
} from '../structure/GatewayPayload.ts';
import { IdentifyCommand } from '../structure/IdentifyCommand.ts';

export interface DiscordSocketSetup {
	id: number;
	url: string;
	identify: IdentifyCommand;
}

export class DiscordSocket {
	private socket?: WebSocket;
	private identify?: IdentifyCommand;
	private url?: string;
	private sessionId?: string;
	private lastSequenceNumber = 0;
	private isResumeNeeded = false;
	private isSetup = false;
	private _isConnected = false;

	get isConnected() {
		return this._isConnected;
	}

	private set connected(value: boolean) {
		if (this.isConnected === value) {
			return;
		}

		this._isConnected = value;

		if (this.onConnectChange) {
			this.onConnectChange(value);
		}
	}

	constructor(
		private readonly log: (...values: any[]) => void,
		private readonly onMessage: (raw: RawGatewayPayload) => void,
		private readonly onConnectChange?: (isConnected: boolean) => void,
	) {}

	async setup({ id, url, identify }: DiscordSocketSetup) {
		this.log(`connect(${id})`);

		this.url = url;
		this.identify = identify;
		this.isSetup = true;

		this.openConnection();
	}

	send(payload: GatewayPayload) {
		if (!this.isConnected) {
			throw new Error('Socket not ready');
		}

		const raw = unwrapGatewayPayload(payload);
		const json = JSON.stringify(raw);
		return this.socket!.send(json);
	}

	private sendOp<T extends GatewayOpCode>(op: T, d: GatewayPayloadData<T>) {
		return this.send({ op, d, t: null, s: null } as GatewayPayload);
	}

	private async openConnection(isResuming = false) {
		if (!this.isSetup) {
			throw new Error('Call DiscordSocket#setup() first!');
		}

		this.socket = await connectWebSocket(this.url!);
		this.connected = true;

		if (isResuming) {
			await this.sendOp(GatewayOpCode.Resume, {
				token: this.identify!.token,
				sessionId: this.sessionId!,
				seq: this.lastSequenceNumber,
			});
		} else {
			await this.sendOp(GatewayOpCode.Identify, this.identify!);
		}

		for await (const message of this.socket) {
			if (isWebSocketCloseEvent(message)) {
				this.onSocketClose(message);
			} else if (typeof message === 'string') {
				const json = JSON.parse(message);
				const payload = wrapGatewayPayload(json);
				this.processMessage(payload);
				this.onMessage(json);
			}
		}
	}

	private async resumeConnection(): Promise<void> {
		this.connected = false;
		this.isResumeNeeded = true;
		this.log('Resume');
		this.openConnection(true);
		await wait(15);

		if (this.isResumeNeeded) {
			return this.resumeConnection();
		}
	}

	private async sendHeartbeat(interval: number) {
		await wait(interval);

		if (this.isConnected) {
			this.sendOp(GatewayOpCode.Heartbeat, this.lastSequenceNumber);
			this.sendHeartbeat(interval);
		}
	}

	private processMessage(x: GatewayPayload) {
		this.connected =
			x.op === GatewayOpCode.Reconnect ||
			x.op === GatewayOpCode.InvalidSession;

		if (typeof x.s === 'number') {
			this.lastSequenceNumber = x.s;
		}

		switch (x.op) {
			case GatewayOpCode.Reconnect:
				return this.resumeConnection();
			case GatewayOpCode.InvalidSession:
				if (x.d) {
					return this.resumeConnection();
				} else {
					this.log('Invalid session');
					return this.openConnection();
				}
			case GatewayOpCode.Hello:
				return this.sendHeartbeat(x.d.heartbeatInterval);
			case GatewayOpCode.Dispatch:
				switch (x.t) {
					case DiscordEvent.RESUMED:
						this.isResumeNeeded = false;
						this.log('Resumed');
						return;
					case DiscordEvent.READY:
						this.sessionId = x.d.sessionId;
				}
		}
	}

	private onSocketClose(x: { code: GatewayCloseCode | WebSocketCloseCode }) {
		this.connected = false;
		this.log('Socket closed', x);

		switch (x.code) {
			// These error codes should just crash the projects
			case GatewayCloseCode.AUTHENTICATION_FAILED:
			case GatewayCloseCode.ALREADY_AUTHENTICATED:
			case GatewayCloseCode.INVALID_API_VERSION:
			case GatewayCloseCode.INVALID_INTENTS:
			case GatewayCloseCode.DISALLOWED_INTENTS:
				this.log('Unrecoverable');
				throw new Error(
					`Discord gateway forbids reconnection. Gateway Close Event Code: ${x.code}`,
				);

			// These error codes can not be resumed but need to reconnect from start
			case GatewayCloseCode.NOT_AUTHENTICATED:
			case GatewayCloseCode.INVALID_SEQ:
			case GatewayCloseCode.RATE_LIMITED:
			case GatewayCloseCode.SESSION_TIMED_OUT:
				this.log('Restarting...');
				return this.openConnection();

			// Reconnect
			case WebSocketCloseCode.NORMAL_CLOSURE:
			case GatewayCloseCode.UNKNOWN_ERROR:
			case GatewayCloseCode.UNKNOWN_OPCODE:
			case GatewayCloseCode.DECODE_ERROR:
			case GatewayCloseCode.INVALID_SHARD:
			case GatewayCloseCode.SHARDING_REQUIRED:
				return this.resumeConnection();

			default:
				throw new Error('Dafuq is dis?');
		}
	}
}
