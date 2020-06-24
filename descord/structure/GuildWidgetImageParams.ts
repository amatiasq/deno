import { RawGuildWidgetImageParams } from '../raw/RawGuildWidgetImageParams.ts';

// https://discord.com/developers/docs/resources/guild#get-guild-widget-image-query-string-params

export interface GuildWidgetImageParams {
	/** style of the widget image returned (see below) DEFAULT: shield */
	style?: string;
}


export function wrapGuildWidgetImageParams(x: RawGuildWidgetImageParams): GuildWidgetImageParams {
	return x;
}

export function unwrapGuildWidgetImageParams(x: GuildWidgetImageParams): RawGuildWidgetImageParams {
	return x;
}

export const wrapGuildWidgetImageParamsPartial = wrapGuildWidgetImageParams as (x: Partial<RawGuildWidgetImageParams>) => Partial<GuildWidgetImageParams>;

export const unwrapGuildWidgetImageParamsPartial = unwrapGuildWidgetImageParams as (x: Partial<GuildWidgetImageParams>) => Partial<RawGuildWidgetImageParams>;
