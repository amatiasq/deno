import { RawEmbed } from './RawEmbed.ts';
import { RawAllowedMentions } from './RawAllowedMentions.ts';

// https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params

export interface RawExecuteWebhookPayload {
	/** the message contents (up to 2000 characters) DEFAULT: one of content, file, embeds */
	content: string;
	/** override the default username of the webhook DEFAULT: false */
	username: string;
	/** override the default avatar of the webhook DEFAULT: false */
	avatar_url: string;
	/** true if this is a TTS message DEFAULT: false */
	tts: boolean;
	/** embedded rich content DEFAULT: one of content, file, embeds */
	embeds: RawEmbed[];
	/** allowed mentions for the message DEFAULT: false */
	allowed_mentions: RawAllowedMentions;

	// TODO: This should only be used if sending FormData
	// /** the contents of the file being sent DEFAULT: one of content, file, embeds */
	// file: file contents;
	// /** See message create DEFAULT: multipart/form-data only */
	// payload_json: string;
}
