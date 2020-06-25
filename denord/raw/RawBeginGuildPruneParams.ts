import { RoleId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#begin-guild-prune-query-string-params

export interface RawBeginGuildPruneParams {
	/** number of days to prune (1 or more) DEFAULT: 7 */
	days?: integer;
	/** whether 'pruned' is returned, discouraged for large guilds DEFAULT: true */
	compute_prune_count?: boolean;
	/** role(s) to include DEFAULT: none */
	include_roles?: RoleId[];
}
