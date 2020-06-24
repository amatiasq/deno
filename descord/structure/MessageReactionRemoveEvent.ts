import { RawMessageReactionRemoveEvent } from '../raw/RawMessageReactionRemoveEvent.ts';
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
		...x,
		userId: x.user_id,
		channelId: x.channel_id,
		messageId: x.message_id,
		guildId: x.guild_id && x.guild_id,
		emoji: wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEvent(x: MessageReactionRemoveEvent): RawMessageReactionRemoveEvent {
	return {
		...x,
		user_id: x.userId,
		channel_id: x.channelId,
		message_id: x.messageId,
		guild_id: x.guildId && x.guildId,
		emoji: unwrapEmojiPartial(x.emoji),
	};
}

export function wrapMessageReactionRemoveEventPartial(x: Partial<RawMessageReactionRemoveEvent>): Partial<MessageReactionRemoveEvent> {
	return {
		...x,
		userId: x.user_id && x.user_id,
		channelId: x.channel_id && x.channel_id,
		messageId: x.message_id && x.message_id,
		guildId: x.guild_id && x.guild_id,
		emoji: x.emoji && wrapEmojiPartial(x.emoji),
	};
}

export function unwrapMessageReactionRemoveEventPartial(x: Partial<MessageReactionRemoveEvent>): Partial<RawMessageReactionRemoveEvent> {
	return {
		...x,
		user_id: x.userId && x.userId,
		channel_id: x.channelId && x.channelId,
		message_id: x.messageId && x.messageId,
		guild_id: x.guildId && x.guildId,
		emoji: x.emoji && unwrapEmojiPartial(x.emoji),
	};
}
