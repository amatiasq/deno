import { RawEmbed } from '../raw/RawEmbed.ts';
import { EmbedType } from '../enum/EmbedType.ts';
import { parseISO8601Timestamp, unparseISO8601Timestamp } from '../internals/type-aliases.ts';
import { EmbedAuthor, wrapEmbedAuthor, unwrapEmbedAuthor } from './EmbedAuthor.ts';
import { EmbedField, wrapEmbedField, unwrapEmbedField } from './EmbedField.ts';
import { EmbedFooter, wrapEmbedFooter, unwrapEmbedFooter } from './EmbedFooter.ts';
import { EmbedImage, wrapEmbedImage, unwrapEmbedImage } from './EmbedImage.ts';
import { EmbedProvider, wrapEmbedProvider, unwrapEmbedProvider } from './EmbedProvider.ts';
import { EmbedThumbnail, wrapEmbedThumbnail, unwrapEmbedThumbnail } from './EmbedThumbnail.ts';
import { EmbedVideo, wrapEmbedVideo, unwrapEmbedVideo } from './EmbedVideo.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
// TODO: make multi interface type

export interface Embed {
	/** title of embed */
	title?: string;
	/** type of embed (always "rich" for webhook embeds) */
	type?: EmbedType;
	/** description of embed */
	description?: string;
	/** url of embed */
	url?: string;
	/** timestamp of embed content (ISO8601 timestamp) */
	timestamp?: Date;
	/** color code of the embed */
	color?: number;
	/** footer information */
	footer?: EmbedFooter;
	/** image information */
	image?: EmbedImage;
	/** thumbnail information */
	thumbnail?: EmbedThumbnail;
	/** video information */
	video?: EmbedVideo;
	/** provider information */
	provider?: EmbedProvider;
	/** author information */
	author?: EmbedAuthor;
	/** fields information */
	fields?: EmbedField[];
}


export function wrapEmbed(x: RawEmbed): Embed {
	return {
		...x,
		timestamp: x.timestamp && parseISO8601Timestamp(x.timestamp),
		footer: x.footer && wrapEmbedFooter(x.footer),
		image: x.image && wrapEmbedImage(x.image),
		thumbnail: x.thumbnail && wrapEmbedThumbnail(x.thumbnail),
		video: x.video && wrapEmbedVideo(x.video),
		provider: x.provider && wrapEmbedProvider(x.provider),
		author: x.author && wrapEmbedAuthor(x.author),
		fields: x.fields && x.fields.map(wrapEmbedField),
	};
}

export function unwrapEmbed(x: Embed): RawEmbed {
	return {
		...x,
		timestamp: x.timestamp && unparseISO8601Timestamp(x.timestamp),
		footer: x.footer && unwrapEmbedFooter(x.footer),
		image: x.image && unwrapEmbedImage(x.image),
		thumbnail: x.thumbnail && unwrapEmbedThumbnail(x.thumbnail),
		video: x.video && unwrapEmbedVideo(x.video),
		provider: x.provider && unwrapEmbedProvider(x.provider),
		author: x.author && unwrapEmbedAuthor(x.author),
		fields: x.fields && x.fields.map(unwrapEmbedField),
	};
}

export const wrapEmbedPartial = wrapEmbed as (x: Partial<RawEmbed>) => Partial<Embed>;

export const unwrapEmbedPartial = unwrapEmbed as (x: Partial<Embed>) => Partial<RawEmbed>;
