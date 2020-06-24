import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface RawMessageDeleteBulkEvent {
	/** the ids of the messages */
	ids: MessageId[];
	/** the id of the channel */
	channel_id: ChannelId;
	/** the id of the guild */
	guild_id?: GuildId;
}
