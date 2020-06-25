import {
	ChannelId,
	GuildId,
	ISO8601Timestamp,
} from '../internals/type-aliases.ts';

export interface RawChannelPinsUpdateEvent {
	/** the id of the guild */
	guild_id?: GuildId;
	/** the id of the channel */
	channel_id: ChannelId;
	/** the time at which the most recent pinned message was pinned */
	last_pin_timestamp?: ISO8601Timestamp;
}
