import { RawGuildWidget } from '../raw/RawGuildWidget.ts';
import { ChannelId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure

export interface GuildWidget {
	/** whether the widget is enabled */
	enabled: boolean;
	/** the widget channel id */
	channelId?: ChannelId;
}


export function wrapGuildWidget(x: RawGuildWidget): GuildWidget {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
	};
}

export function unwrapGuildWidget(x: GuildWidget): RawGuildWidget {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
	};
}

export const wrapGuildWidgetPartial = wrapGuildWidget as (x: Partial<RawGuildWidget>) => Partial<GuildWidget>;

export const unwrapGuildWidgetPartial = unwrapGuildWidget as (x: Partial<GuildWidget>) => Partial<RawGuildWidget>;
