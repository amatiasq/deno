import { RawEmbedProvider } from '../raw/RawEmbedProvider.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure

export interface EmbedProvider {
	/** name of provider */
	name?: string;
	/** url of provider */
	url?: string;
}


export function wrapEmbedProvider(x: RawEmbedProvider): EmbedProvider {
	return x;
}

export function unwrapEmbedProvider(x: EmbedProvider): RawEmbedProvider {
	return x;
}

export const wrapEmbedProviderPartial = wrapEmbedProvider as (x: Partial<RawEmbedProvider>) => Partial<EmbedProvider>;

export const unwrapEmbedProviderPartial = unwrapEmbedProvider as (x: Partial<EmbedProvider>) => Partial<RawEmbedProvider>;
