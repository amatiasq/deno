import { RawEditMessagePayload } from '../raw/RawEditMessagePayload.ts';
import { MessageFlag } from '../enum/MessageFlag.ts';
import { Embed, wrapEmbed, unwrapEmbed } from './Embed.ts';

// https://discord.com/developers/docs/resources/channel#edit-message-json-params

export interface EditMessagePayload {
	/** the new message contents (up to 2000 characters) */
	content?: string;
	/** embedded rich content */
	embed?: Embed;
	/** edit the flags of a message (only SUPPRESSEMBEDS can currently be set/unset) */
	flags?: MessageFlag;
}


export function wrapEditMessagePayload(x: RawEditMessagePayload): EditMessagePayload {
	return {
		...x,
		embed: x.embed && wrapEmbed(x.embed),
	};
}

export function unwrapEditMessagePayload(x: EditMessagePayload): RawEditMessagePayload {
	return {
		...x,
		embed: x.embed && unwrapEmbed(x.embed),
	};
}

export const wrapEditMessagePayloadPartial = wrapEditMessagePayload as (x: Partial<RawEditMessagePayload>) => Partial<EditMessagePayload>;

export const unwrapEditMessagePayloadPartial = unwrapEditMessagePayload as (x: Partial<EditMessagePayload>) => Partial<RawEditMessagePayload>;
