import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { Intent } from '../enum/Intent.ts';
import { DiscordApi } from '../internals/DiscordApi.ts';
import { createGateway, DiscordGateway } from '../internals/DiscordGateway.ts';
import { CreateMessagePayload } from '../structure/CreateMessagePayload.ts';
import {
	DispatchPayload,
	GatewayPayload,
} from '../structure/GatewayPayload.ts';
import { DiscordCache } from './DiscordCache.ts';
import { ChannelId } from './type-aliases.ts';

export async function createClient(
	botId: string,
	token: string,
	intents: Intent[],
) {
	const cache = new DiscordCache();
	const api = new DiscordApi(token, cache);
	const gateway = await createGateway(token, intents, api, cache);
	return new DiscordClient(botId, token, intents, gateway, api, cache);
}

export class DiscordClient {
	constructor(
		readonly botId: string,
		readonly token: string,
		readonly intents: Intent[],
		readonly gateway: DiscordGateway,
		readonly api = new DiscordApi(token),
		readonly cache = new DiscordCache(),
	) {}

	onMessage(listener: (message: GatewayPayload) => void) {
		return this.gateway.onMessage(listener);
	}

	onDispatch<T extends DiscordEvent>(
		event: T,
		listener: (payload: DispatchPayload<T>) => void,
	) {
		return this.gateway.onDispatch(event, listener as any);
	}

	sendMessage(channelId: ChannelId, content: CreateMessagePayload | string) {
		const payload = typeof content === 'string' ? { content } : content;
		return this.api.createMessage(channelId, payload);
	}
}
