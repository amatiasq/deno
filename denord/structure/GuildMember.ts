import { RawGuildMember } from '../raw/RawGuildMember.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { RoleId, parseISO8601Timestamp, unparseISO8601Timestamp } from '../internals/type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

// https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure

export interface GuildMember {
	/** the user this guild member represents */
	user?: User;
	/** this users guild nickname */
	nick?: string;
	/** array of role object ids */
	roles: RoleId[];
	/** when the user joined the guild */
	joinedAt: Date;
	/** when the user started boosting the guild */
	premiumSince?: Date;
	/** whether the user is deafened in voice channels */
	deaf: boolean;
	/** whether the user is muted in voice channels */
	mute: boolean;
}


export function wrapGuildMember(x: RawGuildMember): GuildMember {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
		joinedAt: parseISO8601Timestamp(x.joined_at),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapGuildMember(x: GuildMember): RawGuildMember {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
		joined_at: unparseISO8601Timestamp(x.joinedAt),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}

export function wrapGuildMemberPartial(x: Partial<RawGuildMember>): Partial<GuildMember> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
		joinedAt: x.joined_at && parseISO8601Timestamp(x.joined_at),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapGuildMemberPartial(x: Partial<GuildMember>): Partial<RawGuildMember> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
		joined_at: x.joinedAt && unparseISO8601Timestamp(x.joinedAt),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}
