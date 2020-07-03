import { GatewayPayload } from '../structure/GatewayPayload.ts';
import { GatewayBot } from '../structure/GatewayBot.ts';
import { IdentifyCommand } from '../structure/IdentifyCommand.ts';

export enum ShardMessageType {
	// Orders
	CONNECT,
	SEND,

	// Requests
	LOG,
	INIT_COMPLETE,
	CONECTED,
	DISCONECTED,
	DISCORD_MESSAGE,
}

interface ShardMessage_CONNECT {
	type: ShardMessageType.CONNECT;
	id: number;
	gateway: GatewayBot;
	identify: IdentifyCommand;
}

interface ShardMessage_SEND {
	type: ShardMessageType.SEND;
	payload: GatewayPayload;
}

interface ShardMessage_LOG {
	type: ShardMessageType.LOG;
	values: any[];
}

interface ShardMessage_INIT_COMPLETE {
	type: ShardMessageType.INIT_COMPLETE;
}

interface ShardMessage_CONECTED {
	type: ShardMessageType.CONECTED;
}

interface ShardMessage_DISCONECTED {
	type: ShardMessageType.DISCONECTED;
}

interface ShardMessage_PAYLOAD {
	type: ShardMessageType.DISCORD_MESSAGE;
	payload: GatewayPayload;
}

export type ShardMessage =
	| ShardMessage_CONNECT
	| ShardMessage_SEND
	| ShardMessage_LOG
	| ShardMessage_INIT_COMPLETE
	| ShardMessage_CONECTED
	| ShardMessage_DISCONECTED
	| ShardMessage_PAYLOAD;

export type ShardPayload<T extends ShardMessageType> = Omit<
	Extract<ShardMessage, { type: T }>,
	'type'
>;
