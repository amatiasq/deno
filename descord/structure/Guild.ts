import { RawGuild } from '../raw/RawGuild.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { MessageNotificationLevel } from '../enum/MessageNotificationLevel.ts';
import { ExplicitContentFilterLevel } from '../enum/ExplicitContentFilterLevel.ts';
import { GuildFeature } from '../enum/GuildFeature.ts';
import { MfaLevel } from '../enum/MfaLevel.ts';
import { PremiumTier } from '../enum/PremiumTier.ts';
import { VerificationLevel } from '../enum/VerificationLevel.ts';
import {
	ApplicationId,
	ChannelId,
	GuildId,
	ImageData,
	integer,
	Permission, parsePermissionInteger, unparsePermissionInteger,
	SystemChannelFlag, parseSystemChannelFlagInteger, unparseSystemChannelFlagInteger,
	UserId,
	VoiceRegionId,
} from '../internals/type-aliases.ts';
import { Emoji, wrapEmoji, unwrapEmoji } from './Emoji.ts';
import { Role, wrapRole, unwrapRole } from './Role.ts';

// https://discord.com/developers/docs/resources/guild#guild-object-guild-structure

export interface Guild {
	/** guild id */
	id: GuildId;
	/** guild name (2-100 characters, excluding trailing and leading whitespace) */
	name: string;
	/** icon hash */
	icon: ImageData;
	/** splash hash */
	splash: ImageData;
	/** discovery splash hash; only present for guilds with the "DISCOVERABLE" feature */
	discoverySplash: ImageData;
	/** true if the user is the owner of the guild */
	owner?: boolean;
	/** id of owner */
	ownerId: UserId;
	/** total permissions for the user in the guild (excludes overrides) */
	permissions?: Permission[];
	/** voice region id for the guild */
	region: VoiceRegionId;
	/** id of afk channel */
	afkChannelId: ChannelId;
	/** afk timeout in seconds */
	afkTimeout: integer;
	/** true if the server widget is enabled (deprecated, replaced with widgetEnabled) */
	embedEnabled?: boolean;
	/** the channel id that the widget will generate an invite to, or null if set to no invite (deprecated, replaced with widgetChannelId) */
	embedChannelId?: ChannelId;
	/** verification level required for the guild */
	verificationLevel: VerificationLevel;
	/** default message notifications level */
	defaultMessageNotifications: MessageNotificationLevel;
	/** explicit content filter level */
	explicitContentFilter: ExplicitContentFilterLevel;
	/** roles in the guild */
	roles: Role[];
	/** custom guild emojis */
	emojis: Emoji[];
	/** enabled guild features */
	features: GuildFeature[];
	/** required MFA level for the guild */
	mfaLevel: MfaLevel;
	/** application id of the guild creator if it is bot-created */
	applicationId: ApplicationId;
	/** true if the server widget is enabled */
	widgetEnabled?: boolean;
	/** the channel id that the widget will generate an invite to, or null if set to no invite */
	widgetChannelId?: ChannelId;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	systemChannelId: ChannelId;
	/** system channel flags */
	systemChannelFlags: SystemChannelFlag[];
	/** the id of the channel where guilds with the "PUBLIC" feature can display rules and/or guidelines */
	rulesChannelId: ChannelId;
	/** the maximum number of presences for the guild (the default value, currently 25000, is in effect when null is returned) */
	maxPresences?: integer;
	/** the maximum number of members for the guild */
	maxMembers?: integer;
	/** the vanity url code for the guild */
	vanityUrlCode: string | null;
	/** the description for the guild, if the guild is discoverable */
	description: string | null;
	/** banner hash */
	banner: ImageData | null;
	/** premium tier (Server Boost level) */
	premiumTier: PremiumTier;
	/** the number of boosts this guild currently has */
	premiumSubscriptionCount?: integer;
	/** the preferred locale of a guild with the "PUBLIC" feature; used in server discovery and notices from Discord; defaults to "en-US" */
	preferredLocale: string;
	/** the id of the channel where admins and moderators of guilds with the "PUBLIC" feature receive notices from Discord */
	publicUpdatesChannelId: ChannelId;
	/** the maximum amount of users in a video channel */
	maxVideoChannelUsers?: integer;
	/** approximate number of members in this guild, returned from the GET /guild/<id> endpoint when withCounts is true */
	approximateMemberCount?: integer;
	/** approximate number of non-offline members in this guild, returned from the GET /guild/<id> endpoint when withCounts is true */
	approximatePresenceCount?: integer;
}


export function wrapGuild(x: RawGuild): Guild {
	return {
		...fromApiCasing(x),
		permissions: x.permissions && parsePermissionInteger(x.permissions),
		roles: x.roles.map(wrapRole),
		emojis: x.emojis.map(wrapEmoji),
		systemChannelFlags: parseSystemChannelFlagInteger(x.system_channel_flags),
	};
}

export function unwrapGuild(x: Guild): RawGuild {
	return {
		...toApiCasing(x),
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
		roles: x.roles.map(unwrapRole),
		emojis: x.emojis.map(unwrapEmoji),
		system_channel_flags: unparseSystemChannelFlagInteger(x.systemChannelFlags),
	};
}

export function wrapGuildPartial(x: Partial<RawGuild>): Partial<Guild> {
	return {
		...fromApiCasing(x),
		permissions: x.permissions && parsePermissionInteger(x.permissions),
		roles: x.roles && x.roles.map(wrapRole),
		emojis: x.emojis && x.emojis.map(wrapEmoji),
		systemChannelFlags: x.system_channel_flags && parseSystemChannelFlagInteger(x.system_channel_flags),
	};
}

export function unwrapGuildPartial(x: Partial<Guild>): Partial<RawGuild> {
	return {
		...toApiCasing(x),
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
		roles: x.roles && x.roles.map(unwrapRole),
		emojis: x.emojis && x.emojis.map(unwrapEmoji),
		system_channel_flags: x.systemChannelFlags && unparseSystemChannelFlagInteger(x.systemChannelFlags),
	};
}
