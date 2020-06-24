import { RawExecuteWebhookPayload } from '../raw/RawExecuteWebhookPayload.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';
import { AllowedMentions, wrapAllowedMentions, unwrapAllowedMentions } from './AllowedMentions.ts';

// https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params

export interface ExecuteWebhookPayload {
	/** the message contents (up to 2000 characters) DEFAULT: one of content, file, embeds */
	content: string;
	/** override the default username of the webhook DEFAULT: false */
	username: string;
	/** override the default avatar of the webhook DEFAULT: false */
	avatarUrl: string;
	/** true if this is a TTS message DEFAULT: false */
	tts: boolean;
	/** embedded rich content DEFAULT: one of content, file, embeds */
	embeds: Embed[];
	/** allowed mentions for the message DEFAULT: false */
	allowedMentions: AllowedMentions;

	// TODO: This should only be used if sending FormData
	// /** the contents of the file being sent DEFAULT: one of content, file, embeds */
	// file: file contents;
	// /** See message create DEFAULT: multipart/form-data only */
	// payloadJson: string;
}


export function wrapExecuteWebhookPayload(x: RawExecuteWebhookPayload): ExecuteWebhookPayload {
	return {
		...x,
		avatarUrl: x.avatar_url,
		embeds: x.embeds.map(wrapEmbed),
		allowedMentions: wrapAllowedMentions(x.allowed_mentions),
		// payloadJson: x.payload_json,
	};
}

export function unwrapExecuteWebhookPayload(x: ExecuteWebhookPayload): RawExecuteWebhookPayload {
	return {
		...x,
		avatar_url: x.avatarUrl,
		embeds: x.embeds.map(unwrapEmbed),
		allowed_mentions: unwrapAllowedMentions(x.allowedMentions),
		// payload_json: x.payloadJson,
	};
}

export function wrapExecuteWebhookPayloadPartial(x: Partial<RawExecuteWebhookPayload>): Partial<ExecuteWebhookPayload> {
	return {
		...x,
		avatarUrl: x.avatar_url && x.avatar_url,
		embeds: x.embeds && x.embeds.map(wrapEmbed),
		allowedMentions: x.allowed_mentions && wrapAllowedMentions(x.allowed_mentions),
		// payloadJson: x.payload_json && x.payload_json,
	};
}

export function unwrapExecuteWebhookPayloadPartial(x: Partial<ExecuteWebhookPayload>): Partial<RawExecuteWebhookPayload> {
	return {
		...x,
		avatar_url: x.avatarUrl && x.avatarUrl,
		embeds: x.embeds && x.embeds.map(unwrapEmbed),
		allowed_mentions: x.allowedMentions && unwrapAllowedMentions(x.allowedMentions),
		// payload_json: x.payloadJson && x.payloadJson,
	};
}
