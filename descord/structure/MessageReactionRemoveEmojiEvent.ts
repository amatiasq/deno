import { RawMessageReactionRemoveEmojiEvent } from '../raw/RawMessageReactionRemoveEmojiEvent.ts';
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
		...x,
		channelId: x.channel_id,
		guildId: x.guild_id && x.guild_id,
		messageId: x.message_id,
		emoji: wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEmojiEvent(x: MessageReactionRemoveEmojiEvent): RawMessageReactionRemoveEmojiEvent {
	return {
		...x,
		channel_id: x.channelId,
		guild_id: x.guildId && x.guildId,
		message_id: x.messageId,
		emoji: unwrapEmojiPartial(x.emoji),
	};
}

export function wrapMessageReactionRemoveEmojiEventPartial(x: Partial<RawMessageReactionRemoveEmojiEvent>): Partial<MessageReactionRemoveEmojiEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		guildId: x.guild_id && x.guild_id,
		messageId: x.message_id && x.message_id,
		emoji: x.emoji && wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEmojiEventPartial(x: Partial<MessageReactionRemoveEmojiEvent>): Partial<RawMessageReactionRemoveEmojiEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		guild_id: x.guildId && x.guildId,
		message_id: x.messageId && x.messageId,
		emoji: x.emoji && unwrapEmojiPartial(x.emoji),
	};
}
