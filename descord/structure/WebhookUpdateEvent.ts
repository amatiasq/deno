import { RawWebhookUpdateEvent } from '../raw/RawWebhookUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface WebhookUpdateEvent {
	/** id of the guild */
	guildId: GuildId;
	/** id of the channel */
	channelId: ChannelId;
}


export const wrapWebhookUpdateEvent = fromApiCasing as (x: RawWebhookUpdateEvent) => WebhookUpdateEvent;

export const unwrapWebhookUpdateEvent = toApiCasing as (x: WebhookUpdateEvent) => RawWebhookUpdateEvent;

export const wrapWebhookUpdateEventPartial = wrapWebhookUpdateEvent as (x: Partial<RawWebhookUpdateEvent>) => Partial<WebhookUpdateEvent>;

export const unwrapWebhookUpdateEventPartial = unwrapWebhookUpdateEvent as (x: Partial<WebhookUpdateEvent>) => Partial<RawWebhookUpdateEvent>;
