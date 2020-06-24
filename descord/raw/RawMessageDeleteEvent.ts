import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface RawMessageDeleteEvent {
	/** the id of the message */
	id: MessageId;
	/** the id of the channel */
	channel_id: ChannelId;
	/** the id of the guild */
	guild_id?: GuildId;
}
