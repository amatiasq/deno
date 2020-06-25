import { RawGuildWidget } from '../raw/RawGuildWidget.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure

export interface GuildWidget {
	/** whether the widget is enabled */
	enabled: boolean;
	/** the widget channel id */
	channelId?: ChannelId;
}


export const wrapGuildWidget = fromApiCasing as (x: RawGuildWidget) => GuildWidget;

export const unwrapGuildWidget = toApiCasing as (x: GuildWidget) => RawGuildWidget;

export const wrapGuildWidgetPartial = wrapGuildWidget as (x: Partial<RawGuildWidget>) => Partial<GuildWidget>;

export const unwrapGuildWidgetPartial = unwrapGuildWidget as (x: Partial<GuildWidget>) => Partial<RawGuildWidget>;
