import { RawCreateMessagePayload } from '../raw/RawCreateMessagePayload.ts';
import { AllowedMentions, wrapAllowedMentions, unwrapAllowedMentions } from './AllowedMentions.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';

// https://discord.com/developers/docs/resources/channel#create-message-params

export interface CreateMessagePayload {
	/** the message contents (up to 2000 characters) */
	content: string;
	/** a nonce that can be used for optimistic message sending */
	nonce?: number | string;
	/** true if this is a TTS message */
	tts?: boolean;
	/** embedded rich content */
	embed?: Embed;
	/** allowed mentions for a message */
	allowedMentions?: AllowedMentions;

	// TODO: This should only be used if sending FormData
	/** the contents of the file being sent */
	file?: File;
}


export function wrapCreateMessagePayload(x: RawCreateMessagePayload): CreateMessagePayload {
	return {
		...x,
		embed: x.embed && wrapEmbed(x.embed),
		allowedMentions: x.allowed_mentions && wrapAllowedMentions(x.allowed_mentions),
	};
}

export function unwrapCreateMessagePayload(x: CreateMessagePayload): RawCreateMessagePayload {
	return {
		...x,
		embed: x.embed && unwrapEmbed(x.embed),
		allowed_mentions: x.allowedMentions && unwrapAllowedMentions(x.allowedMentions),
	};
}

export const wrapCreateMessagePayloadPartial = wrapCreateMessagePayload as (x: Partial<RawCreateMessagePayload>) => Partial<CreateMessagePayload>;

export const unwrapCreateMessagePayloadPartial = unwrapCreateMessagePayload as (x: Partial<CreateMessagePayload>) => Partial<RawCreateMessagePayload>;
