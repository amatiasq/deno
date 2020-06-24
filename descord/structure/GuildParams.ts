import { RawGuildParams } from '../raw/RawGuildParams.ts';

// https://discord.com/developers/docs/resources/guild#get-guild-query-string-params

export interface GuildParams {
	/** when true, will return approximate member and presence counts for the guild	DEFAULT: false */
	withCounts?: boolean;
}


export function wrapGuildParams(x: RawGuildParams): GuildParams {
	return {
		...x,
		withCounts: x.with_counts && x.with_counts,
	};
}

export function unwrapGuildParams(x: GuildParams): RawGuildParams {
	return {
		...x,
		with_counts: x.withCounts && x.withCounts,
	};
}

export const wrapGuildParamsPartial = wrapGuildParams as (x: Partial<RawGuildParams>) => Partial<GuildParams>;

export const unwrapGuildParamsPartial = unwrapGuildParams as (x: Partial<GuildParams>) => Partial<RawGuildParams>;
