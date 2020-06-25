import { RawGuildParams } from '../raw/RawGuildParams.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

// https://discord.com/developers/docs/resources/guild#get-guild-query-string-params

export interface GuildParams {
	/** when true, will return approximate member and presence counts for the guild	DEFAULT: false */
	withCounts?: boolean;
}


export const wrapGuildParams = fromApiCasing as (x: RawGuildParams) => GuildParams;

export const unwrapGuildParams = toApiCasing as (x: GuildParams) => RawGuildParams;

export const wrapGuildParamsPartial = wrapGuildParams as (x: Partial<RawGuildParams>) => Partial<GuildParams>;

export const unwrapGuildParamsPartial = unwrapGuildParams as (x: Partial<GuildParams>) => Partial<RawGuildParams>;
