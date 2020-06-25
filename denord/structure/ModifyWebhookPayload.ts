import { RawModifyWebhookPayload } from '../raw/RawModifyWebhookPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params

export interface ModifyWebhookPayload {
	/** the default name of the webhook */
	name: string;
	/** image for the default webhook avatar */
	avatar?: ImageData;
	/** the new channel id this webhook should be moved to */
	channelId: ChannelId;
}


export const wrapModifyWebhookPayload = fromApiCasing as (x: RawModifyWebhookPayload) => ModifyWebhookPayload;

export const unwrapModifyWebhookPayload = toApiCasing as (x: ModifyWebhookPayload) => RawModifyWebhookPayload;

export const wrapModifyWebhookPayloadPartial = wrapModifyWebhookPayload as (x: Partial<RawModifyWebhookPayload>) => Partial<ModifyWebhookPayload>;

export const unwrapModifyWebhookPayloadPartial = unwrapModifyWebhookPayload as (x: Partial<ModifyWebhookPayload>) => Partial<RawModifyWebhookPayload>;
