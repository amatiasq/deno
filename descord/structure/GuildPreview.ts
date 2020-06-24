import { RawGuildPreview } from '../raw/RawGuildPreview.ts';
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
		...x,
		discoverySplash: x.discovery_splash && x.discovery_splash,
		emojis: x.emojis.map(wrapEmoji),
		approximateMemberCount: x.approximate_member_count,
		approximatePresenceCount: x.approximate_presence_count,
	};
}

export function unwrapGuildPreview(x: GuildPreview): RawGuildPreview {
	return {
		...x,
		discovery_splash: x.discoverySplash && x.discoverySplash,
		emojis: x.emojis.map(unwrapEmoji),
		approximate_member_count: x.approximateMemberCount,
		approximate_presence_count: x.approximatePresenceCount,
	};
}

export function wrapGuildPreviewPartial(x: Partial<RawGuildPreview>): Partial<GuildPreview> {
	return {
		...x,
		discoverySplash: x.discovery_splash && x.discovery_splash,
		emojis: x.emojis && x.emojis.map(wrapEmoji),
		approximateMemberCount: x.approximate_member_count && x.approximate_member_count,
		approximatePresenceCount: x.approximate_presence_count && x.approximate_presence_count,
	};
}

export function unwrapGuildPreviewPartial(x: Partial<GuildPreview>): Partial<RawGuildPreview> {
	return {
		...x,
		discovery_splash: x.discoverySplash && x.discoverySplash,
		emojis: x.emojis && x.emojis.map(unwrapEmoji),
		approximate_member_count: x.approximateMemberCount && x.approximateMemberCount,
		approximate_presence_count: x.approximatePresenceCount && x.approximatePresenceCount,
	};
}
