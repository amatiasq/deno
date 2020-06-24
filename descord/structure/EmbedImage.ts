import { RawEmbedImage } from '../raw/RawEmbedImage.ts';
import { integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure

export interface EmbedImage {
	/** source url of image (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the image */
	proxyUrl?: string;
	/** height of image */
	height?: integer;
	/** width of image */
	width?: integer;
}


export function wrapEmbedImage(x: RawEmbedImage): EmbedImage {
	return {
		...x,
		proxyUrl: x.proxy_url && x.proxy_url,
	};
}

export function unwrapEmbedImage(x: EmbedImage): RawEmbedImage {
	return {
		...x,
		proxy_url: x.proxyUrl && x.proxyUrl,
	};
}

export const wrapEmbedImagePartial = wrapEmbedImage as (x: Partial<RawEmbedImage>) => Partial<EmbedImage>;

export const unwrapEmbedImagePartial = unwrapEmbedImage as (x: Partial<EmbedImage>) => Partial<RawEmbedImage>;
