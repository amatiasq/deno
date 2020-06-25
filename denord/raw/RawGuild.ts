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
	PermissionInteger,
	SystemChannelFlagInteger,
	UserId,
	VoiceRegionId,
} from '../internals/type-aliases.ts';
import { RawEmoji } from './RawEmoji.ts';
import { RawRole } from './RawRole.ts';

// https://discord.com/developers/docs/resources/guild#guild-object-guild-structure

export interface RawGuild {
	/** guild id */
	id: GuildId;
	/** guild name (2-100 characters, excluding trailing and leading whitespace) */
	name: string;
	/** icon hash */
	icon: ImageData;
	/** splash hash */
	splash: ImageData;
	/** discovery splash hash; only present for guilds with the "DISCOVERABLE" feature */
	discovery_splash: ImageData;
	/** true if the user is the owner of the guild */
	owner?: boolean;
	/** id of owner */
	owner_id: UserId;
	/** total permissions for the user in the guild (excludes overrides) */
	permissions?: PermissionInteger;
	/** voice region id for the guild */
	region: VoiceRegionId;
	/** id of afk channel */
	afk_channel_id: ChannelId;
	/** afk timeout in seconds */
	afk_timeout: integer;
	/** true if the server widget is enabled (deprecated, replaced with widget_enabled) */
	embed_enabled?: boolean;
	/** the channel id that the widget will generate an invite to, or null if set to no invite (deprecated, replaced with widget_channel_id) */
	embed_channel_id?: ChannelId;
	/** verification level required for the guild */
	verification_level: VerificationLevel;
	/** default message notifications level */
	default_message_notifications: MessageNotificationLevel;
	/** explicit content filter level */
	explicit_content_filter: ExplicitContentFilterLevel;
	/** roles in the guild */
	roles: RawRole[];
	/** custom guild emojis */
	emojis: RawEmoji[];
	/** enabled guild features */
	features: GuildFeature[];
	/** required MFA level for the guild */
	mfa_level: MfaLevel;
	/** application id of the guild creator if it is bot-created */
	application_id: ApplicationId;
	/** true if the server widget is enabled */
	widget_enabled?: boolean;
	/** the channel id that the widget will generate an invite to, or null if set to no invite */
	widget_channel_id?: ChannelId;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	system_channel_id: ChannelId;
	/** system channel flags */
	system_channel_flags: SystemChannelFlagInteger;
	/** the id of the channel where guilds with the "PUBLIC" feature can display rules and/or guidelines */
	rules_channel_id: ChannelId;
	/** the maximum number of presences for the guild (the default value, currently 25000, is in effect when null is returned) */
	max_presences?: integer;
	/** the maximum number of members for the guild */
	max_members?: integer;
	/** the vanity url code for the guild */
	vanity_url_code: string | null;
	/** the description for the guild, if the guild is discoverable */
	description: string | null;
	/** banner hash */
	banner: ImageData | null;
	/** premium tier (Server Boost level) */
	premium_tier: PremiumTier;
	/** the number of boosts this guild currently has */
	premium_subscription_count?: integer;
	/** the preferred locale of a guild with the "PUBLIC" feature; used in server discovery and notices from Discord; defaults to "en-US" */
	preferred_locale: string;
	/** the id of the channel where admins and moderators of guilds with the "PUBLIC" feature receive notices from Discord */
	public_updates_channel_id: ChannelId;
	/** the maximum amount of users in a video channel */
	max_video_channel_users?: integer;
	/** approximate number of members in this guild, returned from the GET /guild/<id> endpoint when with_counts is true */
	approximate_member_count?: integer;
	/** approximate number of non-offline members in this guild, returned from the GET /guild/<id> endpoint when with_counts is true */
	approximate_presence_count?: integer;
}
