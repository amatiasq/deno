import { RawEmbedAuthor } from '../raw/RawEmbedAuthor.ts';

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


export function wrapEmbedAuthor(x: RawEmbedAuthor): EmbedAuthor {
	return {
		...x,
		iconUrl: x.icon_url && x.icon_url,
		proxyIconUrl: x.proxy_icon_url && x.proxy_icon_url,
	};
}

export function unwrapEmbedAuthor(x: EmbedAuthor): RawEmbedAuthor {
	return {
		...x,
		icon_url: x.iconUrl && x.iconUrl,
		proxy_icon_url: x.proxyIconUrl && x.proxyIconUrl,
	};
}

export const wrapEmbedAuthorPartial = wrapEmbedAuthor as (x: Partial<RawEmbedAuthor>) => Partial<EmbedAuthor>;

export const unwrapEmbedAuthorPartial = unwrapEmbedAuthor as (x: Partial<EmbedAuthor>) => Partial<RawEmbedAuthor>;
