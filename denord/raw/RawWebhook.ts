import { WebhookId, GuildId, ChannelId } from '../internals/type-aliases.ts';
import { WebhookType } from '../enum/WebhookType.ts';
import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure

export interface RawWebhook {
	/** the id of the webhook */
	id: WebhookId;
	/** the type of the webhook */
	type: WebhookType;
	/** the guild id this webhook is for */
	guild_id?: GuildId;
	/** the channel id this webhook is for */
	channel_id: ChannelId;
	/** the user this webhook was created by (not returned when getting a webhook with its token) */
	user?: RawUser;
	/** the default name of the webhook */
	name?: string;
	/** the default avatar of the webhook */
	avatar?: string;
	/** the secure token of the webhook (returned for Incoming Webhooks) */
	token?: string;
}
