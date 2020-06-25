import { VerificationLevel } from '../enum/VerificationLevel.ts';
import { MessageNotificationLevel } from '../enum/MessageNotificationLevel.ts';
import { ExplicitContentFilterLevel } from '../enum/ExplicitContentFilterLevel.ts';
import {
	ChannelId,
	integer,
	ImageData,
	UserId,
} from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-json-params

export interface RawModifyGuildPayload {
	/** guild name */
	name?: string;
	/** guild voice region id */
	region?: string;
	/** verification level */
	verification_level?: VerificationLevel;
	/** default message notification level */
	default_message_notifications?: MessageNotificationLevel;
	/** explicit content filter level */
	explicit_content_filter?: ExplicitContentFilterLevel;
	/** id for afk channel */
	afk_channel_id?: ChannelId;
	/** afk timeout in seconds */
	afk_timeout?: integer;
	/** base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has ANIMATED_ICON feature) */
	icon?: ImageData;
	/** user id to transfer guild ownership to (must be owner) */
	owner_id: UserId;
	/** base64 16:9 png/jpeg image for the guild splash (when the server has INVITE_SPLASH feature) */
	splash?: ImageData;
	/** base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
	banner?: ImageData;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	system_channel_id?: ChannelId;
	/** the id of the channel where "PUBLIC" guilds display rules and/or guidelines */
	rules_channel_id?: ChannelId;
	/** the id of the channel where admins and moderators of "PUBLIC" guilds receive notices from Discord */
	public_updates_channel_id?: ChannelId;
	/** the preferred locale of a "PUBLIC" guild used in server discovery and notices from Discord; defaults to "en-US" */
	preferred_locale?: string;
}
