import { RawEmbedThumbnail } from '../raw/RawEmbedThumbnail.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure

export interface EmbedThumbnail {
	/** source url of thumbnail (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the thumbnail */
	proxyUrl?: string;
	/** height of thumbnail */
	height?: integer;
	/** width of thumbnail */
	width?: integer;
}


export const wrapEmbedThumbnail = fromApiCasing as (x: RawEmbedThumbnail) => EmbedThumbnail;

export const unwrapEmbedThumbnail = toApiCasing as (x: EmbedThumbnail) => RawEmbedThumbnail;

export const wrapEmbedThumbnailPartial = wrapEmbedThumbnail as (x: Partial<RawEmbedThumbnail>) => Partial<EmbedThumbnail>;

export const unwrapEmbedThumbnailPartial = unwrapEmbedThumbnail as (x: Partial<EmbedThumbnail>) => Partial<RawEmbedThumbnail>;
