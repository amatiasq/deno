import { RawWebhookUpdateEvent } from '../raw/RawWebhookUpdateEvent.ts';
import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface WebhookUpdateEvent {
	/** id of the guild */
	guildId: GuildId;
	/** id of the channel */
	channelId: ChannelId;
}


export function wrapWebhookUpdateEvent(x: RawWebhookUpdateEvent): WebhookUpdateEvent {
	return {
		...x,
		guildId: x.guild_id,
		channelId: x.channel_id,
	};
}

export function unwrapWebhookUpdateEvent(x: WebhookUpdateEvent): RawWebhookUpdateEvent {
	return {
		...x,
		guild_id: x.guildId,
		channel_id: x.channelId,
	};
}

export function wrapWebhookUpdateEventPartial(x: Partial<RawWebhookUpdateEvent>): Partial<WebhookUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id && x.channel_id,
	};
}

export function unwrapWebhookUpdateEventPartial(x: Partial<WebhookUpdateEvent>): Partial<RawWebhookUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId && x.channelId,
	};
}
