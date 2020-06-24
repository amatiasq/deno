import { integer, UserId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params

export interface RawGuildMembersParams {
	/** max number of members to return (1-1000)	1 */
	limit?: integer;
	/** the highest user id in the previous page	0 */
	after?: UserId;
}
