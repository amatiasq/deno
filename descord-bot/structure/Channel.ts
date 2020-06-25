import {
	Channel,
	CreateMessagePayload,
	DiscordClient,
} from '../../descord/mod.ts';

export type ExtendedChannel = ReturnType<typeof wrapChannel>;

export function wrapChannel(client: DiscordClient, channel: Channel) {
	return {
		...channel,

		send(content: CreateMessagePayload | string) {
			return client.sendMessage(channel.id, content);
		},
	};
}
