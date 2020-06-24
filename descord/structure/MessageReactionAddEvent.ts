import { RawMessageReactionAddEvent } from '../raw/RawMessageReactionAddEvent.ts';
import {
	ChannelId,
	GuildId,
	MessageId,
	UserId,
} from '../internals/type-aliases.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';
import { Emoji, wrapEmojiPartial, unwrapEmojiPartial } from './Emoji.ts';

export interface MessageReactionAddEvent {
	/** the id of the user */
	userId: UserId;
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the message */
	messageId: MessageId;
	/** the id of the guild */
	guildId?: GuildId;
	/** the member who reacted if this happened in a guild */
	member?: GuildMember;
	/** the emoji used to react - example */
	emoji: Partial<Emoji>;
}


export function wrapMessageReactionAddEvent(x: RawMessageReactionAddEvent): MessageReactionAddEvent {
	return {
		...x,
		userId: x.user_id,
		channelId: x.channel_id,
		messageId: x.message_id,
		guildId: x.guild_id && x.guild_id,
		member: x.member && wrapGuildMember(x.member),
		emoji: wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionAddEvent(x: MessageReactionAddEvent): RawMessageReactionAddEvent {
	return {
		...x,
		user_id: x.userId,
		channel_id: x.channelId,
		message_id: x.messageId,
		guild_id: x.guildId && x.guildId,
		member: x.member && unwrapGuildMember(x.member),
		emoji: unwrapEmojiPartial(x.emoji),
	};
}

export function wrapMessageReactionAddEventPartial(x: Partial<RawMessageReactionAddEvent>): Partial<MessageReactionAddEvent> {
	return {
		...x,
		userId: x.user_id && x.user_id,
		channelId: x.channel_id && x.channel_id,
		messageId: x.message_id && x.message_id,
		guildId: x.guild_id && x.guild_id,
		member: x.member && wrapGuildMember(x.member),
		emoji: x.emoji && wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionAddEventPartial(x: Partial<MessageReactionAddEvent>): Partial<RawMessageReactionAddEvent> {
	return {
		...x,
		user_id: x.userId && x.userId,
		channel_id: x.channelId && x.channelId,
		message_id: x.messageId && x.messageId,
		guild_id: x.guildId && x.guildId,
		member: x.member && unwrapGuildMember(x.member),
		emoji: x.emoji && unwrapEmojiPartial(x.emoji),
	};
}
