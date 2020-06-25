import { RawGuildMemberUpdateEvent } from '../raw/RawGuildMemberUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		user: wrapUser(x.user),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapGuildMemberUpdateEvent(x: GuildMemberUpdateEvent): RawGuildMemberUpdateEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}

export function wrapGuildMemberUpdateEventPartial(x: Partial<RawGuildMemberUpdateEvent>): Partial<GuildMemberUpdateEvent> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapGuildMemberUpdateEventPartial(x: Partial<GuildMemberUpdateEvent>): Partial<RawGuildMemberUpdateEvent> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}
