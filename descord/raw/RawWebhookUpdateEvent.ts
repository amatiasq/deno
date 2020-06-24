import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface RawWebhookUpdateEvent {
	/** id of the guild */
	guild_id: GuildId;
	/** id of the channel */
	channel_id: ChannelId;
}
