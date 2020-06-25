import { RawTypingStartEvent } from '../raw/RawTypingStartEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import {
	ChannelId,
	GuildId,
	parseUnixTimestamp, unparseUnixTimestamp,
	UserId,
} from '../internals/type-aliases.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';

export interface TypingStartEvent {
	/** id of the channel */
	channelId: ChannelId;
	/** id of the guild */
	guildId?: GuildId;
	/** id of the user */
	userId: UserId;
	/** unix time (in seconds) of when the user started typing */
	timestamp: Date;
	/** the member who started typing if this happened in a guild */
	member?: GuildMember;
}


export function wrapTypingStartEvent(x: RawTypingStartEvent): TypingStartEvent {
	return {
		...fromApiCasing(x),
		timestamp: parseUnixTimestamp(x.timestamp),
		member: x.member && wrapGuildMember(x.member),
	};
}

export function unwrapTypingStartEvent(x: TypingStartEvent): RawTypingStartEvent {
	return {
		...toApiCasing(x),
		timestamp: unparseUnixTimestamp(x.timestamp),
		member: x.member && unwrapGuildMember(x.member),
	};
}

export function wrapTypingStartEventPartial(x: Partial<RawTypingStartEvent>): Partial<TypingStartEvent> {
	return {
		...fromApiCasing(x),
		timestamp: x.timestamp && parseUnixTimestamp(x.timestamp),
		member: x.member && wrapGuildMember(x.member),
	};
}

export function unwrapTypingStartEventPartial(x: Partial<TypingStartEvent>): Partial<RawTypingStartEvent> {
	return {
		...toApiCasing(x),
		timestamp: x.timestamp && unparseUnixTimestamp(x.timestamp),
		member: x.member && unwrapGuildMember(x.member),
	};
}
