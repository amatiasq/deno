import { RawModifyWebhookPayload } from '../raw/RawModifyWebhookPayload.ts';
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


export function wrapModifyWebhookPayload(x: RawModifyWebhookPayload): ModifyWebhookPayload {
	return {
		...x,
		channelId: x.channel_id,
	};
}

export function unwrapModifyWebhookPayload(x: ModifyWebhookPayload): RawModifyWebhookPayload {
	return {
		...x,
		channel_id: x.channelId,
	};
}

export function wrapModifyWebhookPayloadPartial(x: Partial<RawModifyWebhookPayload>): Partial<ModifyWebhookPayload> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
	};
}

export function unwrapModifyWebhookPayloadPartial(x: Partial<ModifyWebhookPayload>): Partial<RawModifyWebhookPayload> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
	};
}
