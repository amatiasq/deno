import {
	ChannelId,
	GuildId,
	MessageId,
	UserId,
} from '../internals/type-aliases.ts';
import { RawGuildMember } from './RawGuildMember.ts';
import { RawEmoji } from './RawEmoji.ts';

export interface RawMessageReactionAddEvent {
	/** the id of the user */
	user_id: UserId;
	/** the id of the channel */
	channel_id: ChannelId;
	/** the id of the message */
	message_id: MessageId;
	/** the id of the guild */
	guild_id?: GuildId;
	/** the member who reacted if this happened in a guild */
	member?: RawGuildMember;
	/** the emoji used to react - example */
	emoji: Partial<RawEmoji>;
}
