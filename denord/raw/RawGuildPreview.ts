import { GuildFeature } from '../enum/GuildFeature.ts';
import { GuildId, ImageData, integer } from '../internals/type-aliases.ts';
import { RawEmoji } from './RawEmoji.ts';

// https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure

export interface RawGuildPreview {
	/** guild id */
	id: GuildId;
	/** guild name (2-100 characters) */
	name: string;
	/** icon hash */
	icon?: ImageData;
	/** splash hash */
	splash?: ImageData;
	/** discovery splash hash */
	discovery_splash?: ImageData;
	/** custom guild emojis */
	emojis: RawEmoji[];
	/** enabled guild features */
	features: GuildFeature[];
	/** approximate number of members in this guild */
	approximate_member_count: integer;
	/** approximate number of online members in this guild */
	approximate_presence_count: integer;
	/** the description for the guild */
	description?: string;
}
