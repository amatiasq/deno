import { RawMessageDeleteBulkEvent } from '../raw/RawMessageDeleteBulkEvent.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface MessageDeleteBulkEvent {
	/** the ids of the messages */
	ids: MessageId[];
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the guild */
	guildId?: GuildId;
}


export function wrapMessageDeleteBulkEvent(x: RawMessageDeleteBulkEvent): MessageDeleteBulkEvent {
	return {
		...x,
		channelId: x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageDeleteBulkEvent(x: MessageDeleteBulkEvent): RawMessageDeleteBulkEvent {
	return {
		...x,
		channel_id: x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}

export function wrapMessageDeleteBulkEventPartial(x: Partial<RawMessageDeleteBulkEvent>): Partial<MessageDeleteBulkEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageDeleteBulkEventPartial(x: Partial<MessageDeleteBulkEvent>): Partial<RawMessageDeleteBulkEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}
