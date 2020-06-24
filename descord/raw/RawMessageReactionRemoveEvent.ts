import {
	ChannelId,
	GuildId,
	MessageId,
	UserId,
} from '../internals/type-aliases.ts';
import { RawEmoji } from './RawEmoji.ts';

export interface RawMessageReactionRemoveEvent {
	/** the id of the user */
	user_id: UserId;
	/** the id of the channel */
	channel_id: ChannelId;
	/** the id of the message */
	message_id: MessageId;
	/** the id of the guild */
	guild_id?: GuildId;
	/** the emoji used to react - example */
	emoji: Partial<RawEmoji>;
}
