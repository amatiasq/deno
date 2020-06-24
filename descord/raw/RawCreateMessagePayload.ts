import { RawAllowedMentions } from './RawAllowedMentions.ts';
import { RawEmbed } from './RawEmbed.ts';

// https://discord.com/developers/docs/resources/channel#create-message-params

export interface RawCreateMessagePayload {
	/** the message contents (up to 2000 characters) */
	content: string;
	/** a nonce that can be used for optimistic message sending */
	nonce?: number | string;
	/** true if this is a TTS message */
	tts?: boolean;
	/** embedded rich content */
	embed?: RawEmbed;
	/** allowed mentions for a message */
	allowed_mentions?: RawAllowedMentions;

	// TODO: This should only be used if sending FormData
	/** the contents of the file being sent */
	file?: File;
}
