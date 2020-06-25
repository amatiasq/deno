import { integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure

export interface RawEmbedThumbnail {
	/** source url of thumbnail (only supports http(s) and attachments) */
	url?: string;
	/** a proxied url of the thumbnail */
	proxy_url?: string;
	/** height of thumbnail */
	height?: integer;
	/** width of thumbnail */
	width?: integer;
}
