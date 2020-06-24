import { RawGuild } from '../raw/RawGuild.ts';
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
		...x,
		discoverySplash: x.discovery_splash,
		ownerId: x.owner_id,
		permissions: x.permissions && parsePermissionInteger(x.permissions),
		afkChannelId: x.afk_channel_id,
		afkTimeout: x.afk_timeout,
		embedEnabled: x.embed_enabled && x.embed_enabled,
		embedChannelId: x.embed_channel_id && x.embed_channel_id,
		verificationLevel: x.verification_level,
		defaultMessageNotifications: x.default_message_notifications,
		explicitContentFilter: x.explicit_content_filter,
		roles: x.roles.map(wrapRole),
		emojis: x.emojis.map(wrapEmoji),
		mfaLevel: x.mfa_level,
		applicationId: x.application_id,
		widgetEnabled: x.widget_enabled && x.widget_enabled,
		widgetChannelId: x.widget_channel_id && x.widget_channel_id,
		systemChannelId: x.system_channel_id,
		systemChannelFlags: parseSystemChannelFlagInteger(x.system_channel_flags),
		rulesChannelId: x.rules_channel_id,
		maxPresences: x.max_presences && x.max_presences,
		maxMembers: x.max_members && x.max_members,
		vanityUrlCode: x.vanity_url_code,
		premiumTier: x.premium_tier,
		premiumSubscriptionCount: x.premium_subscription_count && x.premium_subscription_count,
		preferredLocale: x.preferred_locale,
		publicUpdatesChannelId: x.public_updates_channel_id,
		maxVideoChannelUsers: x.max_video_channel_users && x.max_video_channel_users,
		approximateMemberCount: x.approximate_member_count && x.approximate_member_count,
		approximatePresenceCount: x.approximate_presence_count && x.approximate_presence_count,
	};
}

export function unwrapGuild(x: Guild): RawGuild {
	return {
		...x,
		discovery_splash: x.discoverySplash,
		owner_id: x.ownerId,
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
		afk_channel_id: x.afkChannelId,
		afk_timeout: x.afkTimeout,
		embed_enabled: x.embedEnabled && x.embedEnabled,
		embed_channel_id: x.embedChannelId && x.embedChannelId,
		verification_level: x.verificationLevel,
		default_message_notifications: x.defaultMessageNotifications,
		explicit_content_filter: x.explicitContentFilter,
		roles: x.roles.map(unwrapRole),
		emojis: x.emojis.map(unwrapEmoji),
		mfa_level: x.mfaLevel,
		application_id: x.applicationId,
		widget_enabled: x.widgetEnabled && x.widgetEnabled,
		widget_channel_id: x.widgetChannelId && x.widgetChannelId,
		system_channel_id: x.systemChannelId,
		system_channel_flags: unparseSystemChannelFlagInteger(x.systemChannelFlags),
		rules_channel_id: x.rulesChannelId,
		max_presences: x.maxPresences && x.maxPresences,
		max_members: x.maxMembers && x.maxMembers,
		vanity_url_code: x.vanityUrlCode,
		premium_tier: x.premiumTier,
		premium_subscription_count: x.premiumSubscriptionCount && x.premiumSubscriptionCount,
		preferred_locale: x.preferredLocale,
		public_updates_channel_id: x.publicUpdatesChannelId,
		max_video_channel_users: x.maxVideoChannelUsers && x.maxVideoChannelUsers,
		approximate_member_count: x.approximateMemberCount && x.approximateMemberCount,
		approximate_presence_count: x.approximatePresenceCount && x.approximatePresenceCount,
	};
}

export function wrapGuildPartial(x: Partial<RawGuild>): Partial<Guild> {
	return {
		...x,
		discoverySplash: x.discovery_splash && x.discovery_splash,
		ownerId: x.owner_id && x.owner_id,
		permissions: x.permissions && parsePermissionInteger(x.permissions),
		afkChannelId: x.afk_channel_id && x.afk_channel_id,
		afkTimeout: x.afk_timeout && x.afk_timeout,
		embedEnabled: x.embed_enabled && x.embed_enabled,
		embedChannelId: x.embed_channel_id && x.embed_channel_id,
		verificationLevel: x.verification_level && x.verification_level,
		defaultMessageNotifications: x.default_message_notifications && x.default_message_notifications,
		explicitContentFilter: x.explicit_content_filter && x.explicit_content_filter,
		roles: x.roles && x.roles.map(wrapRole),
		emojis: x.emojis && x.emojis.map(wrapEmoji),
		mfaLevel: x.mfa_level && x.mfa_level,
		applicationId: x.application_id && x.application_id,
		widgetEnabled: x.widget_enabled && x.widget_enabled,
		widgetChannelId: x.widget_channel_id && x.widget_channel_id,
		systemChannelId: x.system_channel_id && x.system_channel_id,
		systemChannelFlags: x.system_channel_flags && parseSystemChannelFlagInteger(x.system_channel_flags),
		rulesChannelId: x.rules_channel_id && x.rules_channel_id,
		maxPresences: x.max_presences && x.max_presences,
		maxMembers: x.max_members && x.max_members,
		vanityUrlCode: x.vanity_url_code && x.vanity_url_code,
		premiumTier: x.premium_tier && x.premium_tier,
		premiumSubscriptionCount: x.premium_subscription_count && x.premium_subscription_count,
		preferredLocale: x.preferred_locale && x.preferred_locale,
		publicUpdatesChannelId: x.public_updates_channel_id && x.public_updates_channel_id,
		maxVideoChannelUsers: x.max_video_channel_users && x.max_video_channel_users,
		approximateMemberCount: x.approximate_member_count && x.approximate_member_count,
		approximatePresenceCount: x.approximate_presence_count && x.approximate_presence_count,
	};
}

export function unwrapGuildPartial(x: Partial<Guild>): Partial<RawGuild> {
	return {
		...x,
		discovery_splash: x.discoverySplash && x.discoverySplash,
		owner_id: x.ownerId && x.ownerId,
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
		afk_channel_id: x.afkChannelId && x.afkChannelId,
		afk_timeout: x.afkTimeout && x.afkTimeout,
		embed_enabled: x.embedEnabled && x.embedEnabled,
		embed_channel_id: x.embedChannelId && x.embedChannelId,
		verification_level: x.verificationLevel && x.verificationLevel,
		default_message_notifications: x.defaultMessageNotifications && x.defaultMessageNotifications,
		explicit_content_filter: x.explicitContentFilter && x.explicitContentFilter,
		roles: x.roles && x.roles.map(unwrapRole),
		emojis: x.emojis && x.emojis.map(unwrapEmoji),
		mfa_level: x.mfaLevel && x.mfaLevel,
		application_id: x.applicationId && x.applicationId,
		widget_enabled: x.widgetEnabled && x.widgetEnabled,
		widget_channel_id: x.widgetChannelId && x.widgetChannelId,
		system_channel_id: x.systemChannelId && x.systemChannelId,
		system_channel_flags: x.systemChannelFlags && unparseSystemChannelFlagInteger(x.systemChannelFlags),
		rules_channel_id: x.rulesChannelId && x.rulesChannelId,
		max_presences: x.maxPresences && x.maxPresences,
		max_members: x.maxMembers && x.maxMembers,
		vanity_url_code: x.vanityUrlCode && x.vanityUrlCode,
		premium_tier: x.premiumTier && x.premiumTier,
		premium_subscription_count: x.premiumSubscriptionCount && x.premiumSubscriptionCount,
		preferred_locale: x.preferredLocale && x.preferredLocale,
		public_updates_channel_id: x.publicUpdatesChannelId && x.publicUpdatesChannelId,
		max_video_channel_users: x.maxVideoChannelUsers && x.maxVideoChannelUsers,
		approximate_member_count: x.approximateMemberCount && x.approximateMemberCount,
		approximate_presence_count: x.approximatePresenceCount && x.approximatePresenceCount,
	};
}
