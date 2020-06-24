import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { Intent } from '../enum/Intent.ts';
import { DiscordApi } from '../internals/DiscordApi.ts';
import { createGateway, DiscordGateway } from '../internals/DiscordGateway.ts';
import {
	DispatchPayload,
	GatewayPayload,
} from '../structure/GatewayPayload.ts';

export async function createClient(
	botId: string,
	token: string,
	intents: Intent[],
) {
	const api = new DiscordApi(token);
	const gateway = await createGateway(api, token, intents);
	return new DiscordClient(botId, token, intents, api, gateway);
}

export class DiscordClient {
	constructor(
		readonly botId: string,
		readonly token: string,
		readonly intents: Intent[],
		readonly api: DiscordApi,
		readonly gateway: DiscordGateway,
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
}
