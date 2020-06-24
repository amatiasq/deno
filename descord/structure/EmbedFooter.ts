import { RawEmbedFooter } from '../raw/RawEmbedFooter.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

export interface EmbedFooter {
	/** footer text */
	text: string;
	/** url of footer icon (only supports http(s) and attachments) */
	iconUrl?: string;
	/** a proxied url of footer icon */
	proxyIconUrl?: string;
}


export function wrapEmbedFooter(x: RawEmbedFooter): EmbedFooter {
	return {
		...x,
		iconUrl: x.icon_url && x.icon_url,
		proxyIconUrl: x.proxy_icon_url && x.proxy_icon_url,
	};
}

export function unwrapEmbedFooter(x: EmbedFooter): RawEmbedFooter {
	return {
		...x,
		icon_url: x.iconUrl && x.iconUrl,
		proxy_icon_url: x.proxyIconUrl && x.proxyIconUrl,
	};
}

export const wrapEmbedFooterPartial = wrapEmbedFooter as (x: Partial<RawEmbedFooter>) => Partial<EmbedFooter>;

export const unwrapEmbedFooterPartial = unwrapEmbedFooter as (x: Partial<EmbedFooter>) => Partial<RawEmbedFooter>;
