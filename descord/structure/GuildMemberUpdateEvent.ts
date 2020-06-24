import { RawGuildMemberUpdateEvent } from '../raw/RawGuildMemberUpdateEvent.ts';
import {
	GuildId,
	parseISO8601Timestamp, unparseISO8601Timestamp,
	RoleId,
} from '../internals/type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface GuildMemberUpdateEvent {
	/** the id of the guild */
	guildId: GuildId;
	/** user role ids */
	roles: RoleId[];
	/** the user */
	user: User;
	/** nickname of the user in the guild */
	nick?: string;
	/** when the user starting boosting the guild */
	premiumSince?: Date;
}


export function wrapGuildMemberUpdateEvent(x: RawGuildMemberUpdateEvent): GuildMemberUpdateEvent {
	return {
		...x,
		guildId: x.guild_id,
		user: wrapUser(x.user),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapGuildMemberUpdateEvent(x: GuildMemberUpdateEvent): RawGuildMemberUpdateEvent {
	return {
		...x,
		guild_id: x.guildId,
		user: unwrapUser(x.user),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}

export function wrapGuildMemberUpdateEventPartial(x: Partial<RawGuildMemberUpdateEvent>): Partial<GuildMemberUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		user: x.user && wrapUser(x.user),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapGuildMemberUpdateEventPartial(x: Partial<GuildMemberUpdateEvent>): Partial<RawGuildMemberUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		user: x.user && unwrapUser(x.user),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}
