import { RawModifyGuildPayload } from '../raw/RawModifyGuildPayload.ts';
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

export interface ModifyGuildPayload {
	/** guild name */
	name?: string;
	/** guild voice region id */
	region?: string;
	/** verification level */
	verificationLevel?: VerificationLevel;
	/** default message notification level */
	defaultMessageNotifications?: MessageNotificationLevel;
	/** explicit content filter level */
	explicitContentFilter?: ExplicitContentFilterLevel;
	/** id for afk channel */
	afkChannelId?: ChannelId;
	/** afk timeout in seconds */
	afkTimeout?: integer;
	/** base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has ANIMATEDICON feature) */
	icon?: ImageData;
	/** user id to transfer guild ownership to (must be owner) */
	ownerId: UserId;
	/** base64 16:9 png/jpeg image for the guild splash (when the server has INVITESPLASH feature) */
	splash?: ImageData;
	/** base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
	banner?: ImageData;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	systemChannelId?: ChannelId;
	/** the id of the channel where "PUBLIC" guilds display rules and/or guidelines */
	rulesChannelId?: ChannelId;
	/** the id of the channel where admins and moderators of "PUBLIC" guilds receive notices from Discord */
	publicUpdatesChannelId?: ChannelId;
	/** the preferred locale of a "PUBLIC" guild used in server discovery and notices from Discord; defaults to "en-US" */
	preferredLocale?: string;
}


export function wrapModifyGuildPayload(x: RawModifyGuildPayload): ModifyGuildPayload {
	return {
		...x,
		verificationLevel: x.verification_level && x.verification_level,
		defaultMessageNotifications: x.default_message_notifications && x.default_message_notifications,
		explicitContentFilter: x.explicit_content_filter && x.explicit_content_filter,
		afkChannelId: x.afk_channel_id && x.afk_channel_id,
		afkTimeout: x.afk_timeout && x.afk_timeout,
		ownerId: x.owner_id,
		systemChannelId: x.system_channel_id && x.system_channel_id,
		rulesChannelId: x.rules_channel_id && x.rules_channel_id,
		publicUpdatesChannelId: x.public_updates_channel_id && x.public_updates_channel_id,
		preferredLocale: x.preferred_locale && x.preferred_locale,
	};
}

export function unwrapModifyGuildPayload(x: ModifyGuildPayload): RawModifyGuildPayload {
	return {
		...x,
		verification_level: x.verificationLevel && x.verificationLevel,
		default_message_notifications: x.defaultMessageNotifications && x.defaultMessageNotifications,
		explicit_content_filter: x.explicitContentFilter && x.explicitContentFilter,
		afk_channel_id: x.afkChannelId && x.afkChannelId,
		afk_timeout: x.afkTimeout && x.afkTimeout,
		owner_id: x.ownerId,
		system_channel_id: x.systemChannelId && x.systemChannelId,
		rules_channel_id: x.rulesChannelId && x.rulesChannelId,
		public_updates_channel_id: x.publicUpdatesChannelId && x.publicUpdatesChannelId,
		preferred_locale: x.preferredLocale && x.preferredLocale,
	};
}

export function wrapModifyGuildPayloadPartial(x: Partial<RawModifyGuildPayload>): Partial<ModifyGuildPayload> {
	return {
		...x,
		verificationLevel: x.verification_level && x.verification_level,
		defaultMessageNotifications: x.default_message_notifications && x.default_message_notifications,
		explicitContentFilter: x.explicit_content_filter && x.explicit_content_filter,
		afkChannelId: x.afk_channel_id && x.afk_channel_id,
		afkTimeout: x.afk_timeout && x.afk_timeout,
		ownerId: x.owner_id && x.owner_id,
		systemChannelId: x.system_channel_id && x.system_channel_id,
		rulesChannelId: x.rules_channel_id && x.rules_channel_id,
		publicUpdatesChannelId: x.public_updates_channel_id && x.public_updates_channel_id,
		preferredLocale: x.preferred_locale && x.preferred_locale,
	};
}

export function unwrapModifyGuildPayloadPartial(x: Partial<ModifyGuildPayload>): Partial<RawModifyGuildPayload> {
	return {
		...x,
		verification_level: x.verificationLevel && x.verificationLevel,
		default_message_notifications: x.defaultMessageNotifications && x.defaultMessageNotifications,
		explicit_content_filter: x.explicitContentFilter && x.explicitContentFilter,
		afk_channel_id: x.afkChannelId && x.afkChannelId,
		afk_timeout: x.afkTimeout && x.afkTimeout,
		owner_id: x.ownerId && x.ownerId,
		system_channel_id: x.systemChannelId && x.systemChannelId,
		rules_channel_id: x.rulesChannelId && x.rulesChannelId,
		public_updates_channel_id: x.publicUpdatesChannelId && x.publicUpdatesChannelId,
		preferred_locale: x.preferredLocale && x.preferredLocale,
	};
}
