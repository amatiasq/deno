import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';
import { RawEmoji } from './RawEmoji.ts';

export interface RawMessageReactionRemoveEmojiEvent {
	/** the id of the channel */
	channel_id: ChannelId;
	/** the id of the guild */
	guild_id?: GuildId;
	/** the id of the message */
	message_id: MessageId;
	/** the emoji that was removed */
	emoji: Partial<RawEmoji>;
}
