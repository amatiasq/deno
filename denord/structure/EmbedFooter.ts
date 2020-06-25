import { RawEmbedFooter } from '../raw/RawEmbedFooter.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

export interface EmbedFooter {
	/** footer text */
	text: string;
	/** url of footer icon (only supports http(s) and attachments) */
	iconUrl?: string;
	/** a proxied url of footer icon */
	proxyIconUrl?: string;
}


export const wrapEmbedFooter = fromApiCasing as (x: RawEmbedFooter) => EmbedFooter;

export const unwrapEmbedFooter = toApiCasing as (x: EmbedFooter) => RawEmbedFooter;

export const wrapEmbedFooterPartial = wrapEmbedFooter as (x: Partial<RawEmbedFooter>) => Partial<EmbedFooter>;

export const unwrapEmbedFooterPartial = unwrapEmbedFooter as (x: Partial<EmbedFooter>) => Partial<RawEmbedFooter>;
