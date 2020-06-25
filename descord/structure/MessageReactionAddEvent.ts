import { RawMessageReactionAddEvent } from '../raw/RawMessageReactionAddEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import {
	ChannelId,
	GuildId,
	MessageId,
	UserId,
} from '../internals/type-aliases.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';
import { Emoji, wrapEmoji, wrapEmojiPartial, unwrapEmoji, unwrapEmojiPartial } from './Emoji.ts';

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
		...fromApiCasing(x),
		member: x.member && wrapGuildMember(x.member),
		emoji: wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionAddEvent(x: MessageReactionAddEvent): RawMessageReactionAddEvent {
	return {
		...toApiCasing(x),
		member: x.member && unwrapGuildMember(x.member),
		emoji: unwrapEmojiPartial(x.emoji),
	};
}

export function wrapMessageReactionAddEventPartial(x: Partial<RawMessageReactionAddEvent>): Partial<MessageReactionAddEvent> {
	return {
		...fromApiCasing(x),
		member: x.member && wrapGuildMember(x.member),
		emoji: x.emoji && wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionAddEventPartial(x: Partial<MessageReactionAddEvent>): Partial<RawMessageReactionAddEvent> {
	return {
		...toApiCasing(x),
		member: x.member && unwrapGuildMember(x.member),
		emoji: x.emoji && unwrapEmojiPartial(x.emoji),
	};
}
