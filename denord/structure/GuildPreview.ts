import { RawGuildPreview } from '../raw/RawGuildPreview.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildFeature } from '../enum/GuildFeature.ts';
import { GuildId, ImageData, integer } from '../internals/type-aliases.ts';
import { Emoji, wrapEmoji, unwrapEmoji } from './Emoji.ts';

// https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure

export interface GuildPreview {
	/** guild id */
	id: GuildId;
	/** guild name (2-100 characters) */
	name: string;
	/** icon hash */
	icon?: ImageData;
	/** splash hash */
	splash?: ImageData;
	/** discovery splash hash */
	discoverySplash?: ImageData;
	/** custom guild emojis */
	emojis: Emoji[];
	/** enabled guild features */
	features: GuildFeature[];
	/** approximate number of members in this guild */
	approximateMemberCount: integer;
	/** approximate number of online members in this guild */
	approximatePresenceCount: integer;
	/** the description for the guild */
	description?: string;
}


export function wrapGuildPreview(x: RawGuildPreview): GuildPreview {
	return {
		...fromApiCasing(x),
		emojis: x.emojis.map(wrapEmoji),
	};
}

export function unwrapGuildPreview(x: GuildPreview): RawGuildPreview {
	return {
		...toApiCasing(x),
		emojis: x.emojis.map(unwrapEmoji),
	};
}

export function wrapGuildPreviewPartial(x: Partial<RawGuildPreview>): Partial<GuildPreview> {
	return {
		...fromApiCasing(x),
		emojis: x.emojis && x.emojis.map(wrapEmoji),
	};
}

export function unwrapGuildPreviewPartial(x: Partial<GuildPreview>): Partial<RawGuildPreview> {
	return {
		...toApiCasing(x),
		emojis: x.emojis && x.emojis.map(unwrapEmoji),
	};
}
