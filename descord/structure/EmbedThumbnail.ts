import { RawEmbedThumbnail } from '../raw/RawEmbedThumbnail.ts';
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


export function wrapEmbedThumbnail(x: RawEmbedThumbnail): EmbedThumbnail {
	return {
		...x,
		proxyUrl: x.proxy_url && x.proxy_url,
	};
}

export function unwrapEmbedThumbnail(x: EmbedThumbnail): RawEmbedThumbnail {
	return {
		...x,
		proxy_url: x.proxyUrl && x.proxyUrl,
	};
}

export const wrapEmbedThumbnailPartial = wrapEmbedThumbnail as (x: Partial<RawEmbedThumbnail>) => Partial<EmbedThumbnail>;

export const unwrapEmbedThumbnailPartial = unwrapEmbedThumbnail as (x: Partial<EmbedThumbnail>) => Partial<RawEmbedThumbnail>;
