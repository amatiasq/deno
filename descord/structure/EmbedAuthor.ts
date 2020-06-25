import { RawEmbedAuthor } from '../raw/RawEmbedAuthor.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure

export interface EmbedAuthor {
	/** name of author */
	name?: string;
	/** url of author */
	url?: string;
	/** url of author icon (only supports http(s) and attachments) */
	iconUrl?: string;
	/** a proxied url of author icon */
	proxyIconUrl?: string;
}


export const wrapEmbedAuthor = fromApiCasing as (x: RawEmbedAuthor) => EmbedAuthor;

export const unwrapEmbedAuthor = toApiCasing as (x: EmbedAuthor) => RawEmbedAuthor;

export const wrapEmbedAuthorPartial = wrapEmbedAuthor as (x: Partial<RawEmbedAuthor>) => Partial<EmbedAuthor>;

export const unwrapEmbedAuthorPartial = unwrapEmbedAuthor as (x: Partial<EmbedAuthor>) => Partial<RawEmbedAuthor>;
