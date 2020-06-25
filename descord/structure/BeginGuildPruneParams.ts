import { RawBeginGuildPruneParams } from '../raw/RawBeginGuildPruneParams.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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


export const wrapBeginGuildPruneParams = fromApiCasing as (x: RawBeginGuildPruneParams) => BeginGuildPruneParams;

export const unwrapBeginGuildPruneParams = toApiCasing as (x: BeginGuildPruneParams) => RawBeginGuildPruneParams;

export const wrapBeginGuildPruneParamsPartial = wrapBeginGuildPruneParams as (x: Partial<RawBeginGuildPruneParams>) => Partial<BeginGuildPruneParams>;

export const unwrapBeginGuildPruneParamsPartial = unwrapBeginGuildPruneParams as (x: Partial<BeginGuildPruneParams>) => Partial<RawBeginGuildPruneParams>;
