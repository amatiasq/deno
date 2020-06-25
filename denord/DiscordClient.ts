import { DiscordEvent } from './enum/DiscordEvent.ts';
import { Intent } from './enum/Intent.ts';
import { DiscordApi } from './internals/DiscordApi.ts';
import { DiscordCache } from './internals/DiscordCache.ts';
import { createGateway, DiscordGateway } from './internals/DiscordGateway.ts';
import { ChannelId, GuildId, UserId } from './internals/type-aliases.ts';
import { CreateMessagePayload } from './structure/CreateMessagePayload.ts';
import { DispatchPayload, GatewayPayload } from './structure/GatewayPayload.ts';
import { User } from './structure/User.ts';
import { Guild } from './structure/Guild.ts';
import { Channel } from './structure/Channel.ts';

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

	getUser(id: UserId, { useCache = true } = {}): Promise<User> {
		return getOrFetch(
			useCache,
			() => this.cache.getUser(id),
			() => this.api.getUser(id),
		);
	}

	getGuild(id: GuildId, { useCache = true } = {}): Promise<Guild> {
		return getOrFetch(
			useCache,
			() => this.cache.getGuild(id),
			() => this.api.getGuild(id),
		);
	}

	getChannel(id: ChannelId, { useCache = true } = {}): Promise<Channel> {
		return getOrFetch(
			useCache,
			() => this.cache.getChannel(id),
			() => this.api.getChannel(id),
		);
	}
}

function getOrFetch<T>(
	useCache: boolean,
	get: () => T | undefined,
	fetch: () => Promise<T>,
) {
	if (useCache) {
		const cached = get();

		if (cached) {
			return Promise.resolve(cached);
		}
	}

	return fetch();
}
