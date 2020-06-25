import { ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/webhook#create-webhook-json-params

export interface RawCreateWebhookPayload {
	/** name of the webhook (1-80 characters) */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
}
