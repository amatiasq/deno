import { RawGuildMembersParams } from '../raw/RawGuildMembersParams.ts';
import { integer, UserId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params

export interface GuildMembersParams {
	/** max number of members to return (1-1000)	1 */
	limit?: integer;
	/** the highest user id in the previous page	0 */
	after?: UserId;
}


export function wrapGuildMembersParams(x: RawGuildMembersParams): GuildMembersParams {
	return x;
}

export function unwrapGuildMembersParams(x: GuildMembersParams): RawGuildMembersParams {
	return x;
}

export const wrapGuildMembersParamsPartial = wrapGuildMembersParams as (x: Partial<RawGuildMembersParams>) => Partial<GuildMembersParams>;

export const unwrapGuildMembersParamsPartial = unwrapGuildMembersParams as (x: Partial<GuildMembersParams>) => Partial<RawGuildMembersParams>;
