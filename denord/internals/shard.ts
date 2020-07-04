import {
	ShardMessage,
	ShardMessageType,
	ShardPayload,
} from './ShardMessage.ts';
import { DiscordSocket } from './DiscordSocket.ts';

log('awake');

const discord = new DiscordSocket(
	log,
	isConnected => notifyStatus(isConnected),
	raw => send(ShardMessageType.DISCORD_MESSAGE, { payload: raw }),
);

// @ts-ignore
onmessage = (event: MessageEvent) => onParentMessage(event.data);

send(ShardMessageType.INIT_COMPLETE);
log('waiting');

function notifyStatus(isConnected: boolean) {
	if (isConnected) {
		send(ShardMessageType.CONECTED);
	} else {
		send(ShardMessageType.DISCONECTED);
	}
}

function onParentMessage(x: ShardMessage) {
	switch (x.type) {
		case ShardMessageType.CONNECT:
			return discord.setup(x);
		case ShardMessageType.SEND:
			return discord.send(x.payload);
	}
}

function send<T extends ShardMessageType>(type: T, payload?: ShardPayload<T>) {
	const message = payload ? { type, ...payload } : { type };
	// @ts-ignore
	postMessage(message);
}

function log(...values: any) {
	send(ShardMessageType.LOG, { values });
}
