import { RawEmbedImage } from '../raw/RawEmbedImage.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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


export const wrapEmbedImage = fromApiCasing as (x: RawEmbedImage) => EmbedImage;

export const unwrapEmbedImage = toApiCasing as (x: EmbedImage) => RawEmbedImage;

export const wrapEmbedImagePartial = wrapEmbedImage as (x: Partial<RawEmbedImage>) => Partial<EmbedImage>;

export const unwrapEmbedImagePartial = unwrapEmbedImage as (x: Partial<EmbedImage>) => Partial<RawEmbedImage>;
