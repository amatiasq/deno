import { RawWebhook } from '../raw/RawWebhook.ts';
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
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id,
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapWebhook(x: Webhook): RawWebhook {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId,
		user: x.user && unwrapUser(x.user),
	};
}

export function wrapWebhookPartial(x: Partial<RawWebhook>): Partial<Webhook> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id && x.channel_id,
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapWebhookPartial(x: Partial<Webhook>): Partial<RawWebhook> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId && x.channelId,
		user: x.user && unwrapUser(x.user),
	};
}
