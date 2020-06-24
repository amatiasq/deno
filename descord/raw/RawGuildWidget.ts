import { ChannelId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure

export interface RawGuildWidget {
	/** whether the widget is enabled */
	enabled: boolean;
	/** the widget channel id */
	channel_id?: ChannelId;
}
