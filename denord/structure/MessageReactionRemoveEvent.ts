import { RawMessageReactionRemoveEvent } from '../raw/RawMessageReactionRemoveEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import {
	ChannelId,
	GuildId,
	MessageId,
	UserId,
} from '../internals/type-aliases.ts';
import { Emoji, wrapEmoji, wrapEmojiPartial, unwrapEmoji, unwrapEmojiPartial } from './Emoji.ts';

export interface MessageReactionRemoveEvent {
	/** the id of the user */
	userId: UserId;
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the message */
	messageId: MessageId;
	/** the id of the guild */
	guildId?: GuildId;
	/** the emoji used to react - example */
	emoji: Partial<Emoji>;
}


export function wrapMessageReactionRemoveEvent(x: RawMessageReactionRemoveEvent): MessageReactionRemoveEvent {
	return {
		...fromApiCasing(x),
		emoji: wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEvent(x: MessageReactionRemoveEvent): RawMessageReactionRemoveEvent {
	return {
		...toApiCasing(x),
		emoji: unwrapEmojiPartial(x.emoji),
	};
}

export function wrapMessageReactionRemoveEventPartial(x: Partial<RawMessageReactionRemoveEvent>): Partial<MessageReactionRemoveEvent> {
	return {
		...fromApiCasing(x),
		emoji: x.emoji && wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEventPartial(x: Partial<MessageReactionRemoveEvent>): Partial<RawMessageReactionRemoveEvent> {
	return {
		...toApiCasing(x),
		emoji: x.emoji && unwrapEmojiPartial(x.emoji),
	};
}
