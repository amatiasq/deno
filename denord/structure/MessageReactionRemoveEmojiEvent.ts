import { RawMessageReactionRemoveEmojiEvent } from '../raw/RawMessageReactionRemoveEmojiEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';
import { Emoji, wrapEmoji, wrapEmojiPartial, unwrapEmoji, unwrapEmojiPartial } from './Emoji.ts';

export interface MessageReactionRemoveEmojiEvent {
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the guild */
	guildId?: GuildId;
	/** the id of the message */
	messageId: MessageId;
	/** the emoji that was removed */
	emoji: Partial<Emoji>;
}


export function wrapMessageReactionRemoveEmojiEvent(x: RawMessageReactionRemoveEmojiEvent): MessageReactionRemoveEmojiEvent {
	return {
		...fromApiCasing(x),
		emoji: wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEmojiEvent(x: MessageReactionRemoveEmojiEvent): RawMessageReactionRemoveEmojiEvent {
	return {
		...toApiCasing(x),
		emoji: unwrapEmojiPartial(x.emoji),
	};
}

export function wrapMessageReactionRemoveEmojiEventPartial(x: Partial<RawMessageReactionRemoveEmojiEvent>): Partial<MessageReactionRemoveEmojiEvent> {
	return {
		...fromApiCasing(x),
		emoji: x.emoji && wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEmojiEventPartial(x: Partial<MessageReactionRemoveEmojiEvent>): Partial<RawMessageReactionRemoveEmojiEvent> {
	return {
		...toApiCasing(x),
		emoji: x.emoji && unwrapEmojiPartial(x.emoji),
	};
}
