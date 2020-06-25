import { RoleId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params

export interface RawGuildPruneCountParams {
	/** number of days to count prune for (1 or more) DEFAULT: 7 */
	days?: integer;
	/** role(s) to include DEFAULT: none */
	include_roles?: RoleId[];
}
