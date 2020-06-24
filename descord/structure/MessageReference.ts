import { RawMessageReference } from '../raw/RawMessageReference.ts';
import { MessageId, ChannelId, GuildId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure

export interface MessageReference {
	/** id of the originating message */
	messageId?: MessageId;
	/** id of the originating message's channel */
	channelId: ChannelId;
	/** id of the originating message's guild */
	guildId?: GuildId;
}


export function wrapMessageReference(x: RawMessageReference): MessageReference {
	return {
		...x,
		messageId: x.message_id && x.message_id,
		channelId: x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageReference(x: MessageReference): RawMessageReference {
	return {
		...x,
		message_id: x.messageId && x.messageId,
		channel_id: x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}

export function wrapMessageReferencePartial(x: Partial<RawMessageReference>): Partial<MessageReference> {
	return {
		...x,
		messageId: x.message_id && x.message_id,
		channelId: x.channel_id && x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageReferencePartial(x: Partial<MessageReference>): Partial<RawMessageReference> {
	return {
		...x,
		message_id: x.messageId && x.messageId,
		channel_id: x.channelId && x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}
