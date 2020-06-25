import { RawEmbedVideo } from '../raw/RawEmbedVideo.ts';
import { integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure

export interface EmbedVideo {
	/** source url of video */
	url?: string;
	/** height of video */
	height?: integer;
	/** width of video */
	width?: integer;
}


export function wrapEmbedVideo(x: RawEmbedVideo): EmbedVideo {
	return x;
}

export function unwrapEmbedVideo(x: EmbedVideo): RawEmbedVideo {
	return x;
}

export const wrapEmbedVideoPartial = wrapEmbedVideo as (x: Partial<RawEmbedVideo>) => Partial<EmbedVideo>;

export const unwrapEmbedVideoPartial = unwrapEmbedVideo as (x: Partial<EmbedVideo>) => Partial<RawEmbedVideo>;
