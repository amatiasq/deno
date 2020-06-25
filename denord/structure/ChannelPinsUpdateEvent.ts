import { RawChannelPinsUpdateEvent } from '../raw/RawChannelPinsUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		lastPinTimestamp: x.last_pin_timestamp && parseISO8601Timestamp(x.last_pin_timestamp),
	};
}

export function unwrapChannelPinsUpdateEvent(x: ChannelPinsUpdateEvent): RawChannelPinsUpdateEvent {
	return {
		...toApiCasing(x),
		last_pin_timestamp: x.lastPinTimestamp && unparseISO8601Timestamp(x.lastPinTimestamp),
	};
}

export const wrapChannelPinsUpdateEventPartial = wrapChannelPinsUpdateEvent as (x: Partial<RawChannelPinsUpdateEvent>) => Partial<ChannelPinsUpdateEvent>;

export const unwrapChannelPinsUpdateEventPartial = unwrapChannelPinsUpdateEvent as (x: Partial<ChannelPinsUpdateEvent>) => Partial<RawChannelPinsUpdateEvent>;
