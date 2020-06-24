import { ChannelId, ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params

export interface RawModifyWebhookPayload {
	/** the default name of the webhook */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
	/** the new channel id this webhook should be moved to */
	channel_id: ChannelId;
}
