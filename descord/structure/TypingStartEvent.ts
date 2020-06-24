import { RawTypingStartEvent } from '../raw/RawTypingStartEvent.ts';
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
		...x,
		channelId: x.channel_id,
		guildId: x.guild_id && x.guild_id,
		userId: x.user_id,
		timestamp: parseUnixTimestamp(x.timestamp),
		member: x.member && wrapGuildMember(x.member),
	};
}

export function unwrapTypingStartEvent(x: TypingStartEvent): RawTypingStartEvent {
	return {
		...x,
		channel_id: x.channelId,
		guild_id: x.guildId && x.guildId,
		user_id: x.userId,
		timestamp: unparseUnixTimestamp(x.timestamp),
		member: x.member && unwrapGuildMember(x.member),
	};
}

export function wrapTypingStartEventPartial(x: Partial<RawTypingStartEvent>): Partial<TypingStartEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		guildId: x.guild_id && x.guild_id,
		userId: x.user_id && x.user_id,
		timestamp: x.timestamp && parseUnixTimestamp(x.timestamp),
		member: x.member && wrapGuildMember(x.member),
	};
}

export function unwrapTypingStartEventPartial(x: Partial<TypingStartEvent>): Partial<RawTypingStartEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		guild_id: x.guildId && x.guildId,
		user_id: x.userId && x.userId,
		timestamp: x.timestamp && unparseUnixTimestamp(x.timestamp),
		member: x.member && unwrapGuildMember(x.member),
	};
}
