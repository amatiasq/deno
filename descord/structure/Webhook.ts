import { RawWebhook } from '../raw/RawWebhook.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { WebhookId, GuildId, ChannelId } from '../internals/type-aliases.ts';
import { WebhookType } from '../enum/WebhookType.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure

export interface Webhook {
	/** the id of the webhook */
	id: WebhookId;
	/** the type of the webhook */
	type: WebhookType;
	/** the guild id this webhook is for */
	guildId?: GuildId;
	/** the channel id this webhook is for */
	channelId: ChannelId;
	/** the user this webhook was created by (not returned when getting a webhook with its token) */
	user?: User;
	/** the default name of the webhook */
	name?: string;
	/** the default avatar of the webhook */
	avatar?: string;
	/** the secure token of the webhook (returned for Incoming Webhooks) */
	token?: string;
}


export function wrapWebhook(x: RawWebhook): Webhook {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapWebhook(x: Webhook): RawWebhook {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
	};
}

export const wrapWebhookPartial = wrapWebhook as (x: Partial<RawWebhook>) => Partial<Webhook>;

export const unwrapWebhookPartial = unwrapWebhook as (x: Partial<Webhook>) => Partial<RawWebhook>;
