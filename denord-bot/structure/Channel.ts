import {
	Channel,
	CreateMessagePayload,
	DiscordClient,
} from '../../denord/mod.ts';

export type BotChannel = ReturnType<typeof wrapChannel>;

export function wrapChannel(client: DiscordClient, channel: Channel) {
	return {
		...channel,

		send(content: CreateMessagePayload | string) {
			return client.sendMessage(channel.id, content);
		},
	};
}
