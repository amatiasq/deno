import { RawCreateWebhookPayload } from '../raw/RawCreateWebhookPayload.ts';
import { ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/webhook#create-webhook-json-params

export interface CreateWebhookPayload {
	/** name of the webhook (1-80 characters) */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
}


export function wrapCreateWebhookPayload(x: RawCreateWebhookPayload): CreateWebhookPayload {
	return x;
}

export function unwrapCreateWebhookPayload(x: CreateWebhookPayload): RawCreateWebhookPayload {
	return x;
}

export const wrapCreateWebhookPayloadPartial = wrapCreateWebhookPayload as (x: Partial<RawCreateWebhookPayload>) => Partial<CreateWebhookPayload>;

export const unwrapCreateWebhookPayloadPartial = unwrapCreateWebhookPayload as (x: Partial<CreateWebhookPayload>) => Partial<RawCreateWebhookPayload>;
