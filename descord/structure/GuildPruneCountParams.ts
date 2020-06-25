import { RawGuildPruneCountParams } from '../raw/RawGuildPruneCountParams.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { RoleId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params

export interface GuildPruneCountParams {
	/** number of days to count prune for (1 or more) DEFAULT: 7 */
	days?: integer;
	/** role(s) to include DEFAULT: none */
	includeRoles?: RoleId[];
}


export const wrapGuildPruneCountParams = fromApiCasing as (x: RawGuildPruneCountParams) => GuildPruneCountParams;

export const unwrapGuildPruneCountParams = toApiCasing as (x: GuildPruneCountParams) => RawGuildPruneCountParams;

export const wrapGuildPruneCountParamsPartial = wrapGuildPruneCountParams as (x: Partial<RawGuildPruneCountParams>) => Partial<GuildPruneCountParams>;

export const unwrapGuildPruneCountParamsPartial = unwrapGuildPruneCountParams as (x: Partial<GuildPruneCountParams>) => Partial<RawGuildPruneCountParams>;
