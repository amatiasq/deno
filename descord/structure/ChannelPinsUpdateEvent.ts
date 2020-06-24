import { RawChannelPinsUpdateEvent } from '../raw/RawChannelPinsUpdateEvent.ts';
import {
	ChannelId,
	GuildId,
	parseISO8601Timestamp, unparseISO8601Timestamp,
} from '../internals/type-aliases.ts';

export interface ChannelPinsUpdateEvent {
	/** the id of the guild */
	guildId?: GuildId;
	/** the id of the channel */
	channelId: ChannelId;
	/** the time at which the most recent pinned message was pinned */
	lastPinTimestamp?: Date;
}


export function wrapChannelPinsUpdateEvent(x: RawChannelPinsUpdateEvent): ChannelPinsUpdateEvent {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id,
		lastPinTimestamp: x.last_pin_timestamp && parseISO8601Timestamp(x.last_pin_timestamp),
	};
}

export function unwrapChannelPinsUpdateEvent(x: ChannelPinsUpdateEvent): RawChannelPinsUpdateEvent {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId,
		last_pin_timestamp: x.lastPinTimestamp && unparseISO8601Timestamp(x.lastPinTimestamp),
	};
}

export function wrapChannelPinsUpdateEventPartial(x: Partial<RawChannelPinsUpdateEvent>): Partial<ChannelPinsUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id && x.channel_id,
		lastPinTimestamp: x.last_pin_timestamp && parseISO8601Timestamp(x.last_pin_timestamp),
	};
}

export function unwrapChannelPinsUpdateEventPartial(x: Partial<ChannelPinsUpdateEvent>): Partial<RawChannelPinsUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId && x.channelId,
		last_pin_timestamp: x.lastPinTimestamp && unparseISO8601Timestamp(x.lastPinTimestamp),
	};
}
