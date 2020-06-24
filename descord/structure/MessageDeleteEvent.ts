import { RawMessageDeleteEvent } from '../raw/RawMessageDeleteEvent.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface MessageDeleteEvent {
	/** the id of the message */
	id: MessageId;
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the guild */
	guildId?: GuildId;
}


export function wrapMessageDeleteEvent(x: RawMessageDeleteEvent): MessageDeleteEvent {
	return {
		...x,
		channelId: x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageDeleteEvent(x: MessageDeleteEvent): RawMessageDeleteEvent {
	return {
		...x,
		channel_id: x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}

export function wrapMessageDeleteEventPartial(x: Partial<RawMessageDeleteEvent>): Partial<MessageDeleteEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapMessageDeleteEventPartial(x: Partial<MessageDeleteEvent>): Partial<RawMessageDeleteEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}
