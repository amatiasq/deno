import { RawBeginGuildPruneParams } from '../raw/RawBeginGuildPruneParams.ts';
import { RoleId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#begin-guild-prune-query-string-params

export interface BeginGuildPruneParams {
	/** number of days to prune (1 or more) DEFAULT: 7 */
	days?: integer;
	/** whether 'pruned' is returned, discouraged for large guilds DEFAULT: true */
	computePruneCount?: boolean;
	/** role(s) to include DEFAULT: none */
	includeRoles?: RoleId[];
}


export function wrapBeginGuildPruneParams(x: RawBeginGuildPruneParams): BeginGuildPruneParams {
	return {
		...x,
		computePruneCount: x.compute_prune_count && x.compute_prune_count,
		includeRoles: x.include_roles && x.include_roles,
	};
}

export function unwrapBeginGuildPruneParams(x: BeginGuildPruneParams): RawBeginGuildPruneParams {
	return {
		...x,
		compute_prune_count: x.computePruneCount && x.computePruneCount,
		include_roles: x.includeRoles && x.includeRoles,
	};
}

export const wrapBeginGuildPruneParamsPartial = wrapBeginGuildPruneParams as (x: Partial<RawBeginGuildPruneParams>) => Partial<BeginGuildPruneParams>;

export const unwrapBeginGuildPruneParamsPartial = unwrapBeginGuildPruneParams as (x: Partial<BeginGuildPruneParams>) => Partial<RawBeginGuildPruneParams>;
