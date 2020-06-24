import { RawMessageReactionRemoveAllEvent } from '../raw/RawMessageReactionRemoveAllEvent.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface MessageReactionRemoveAllEvent {
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the message */
	messageId: MessageId;
	/** the id of the guild */
	guildId?: GuildId;
}


export function wrapMessageReactionRemoveAllEvent(x: RawMessageReactionRemoveAllEvent): MessageReactionRemoveAllEvent {
	return {
		...x,
		channelId: x.channel_id,
		messageId: x.message_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageReactionRemoveAllEvent(x: MessageReactionRemoveAllEvent): RawMessageReactionRemoveAllEvent {
	return {
		...x,
		channel_id: x.channelId,
		message_id: x.messageId,
		guild_id: x.guildId && x.guildId,
	};
}

export function wrapMessageReactionRemoveAllEventPartial(x: Partial<RawMessageReactionRemoveAllEvent>): Partial<MessageReactionRemoveAllEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		messageId: x.message_id && x.message_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageReactionRemoveAllEventPartial(x: Partial<MessageReactionRemoveAllEvent>): Partial<RawMessageReactionRemoveAllEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		message_id: x.messageId && x.messageId,
		guild_id: x.guildId && x.guildId,
	};
}
