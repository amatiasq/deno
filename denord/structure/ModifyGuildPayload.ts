import { RawModifyGuildPayload } from '../raw/RawModifyGuildPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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


export const wrapModifyGuildPayload = fromApiCasing as (x: RawModifyGuildPayload) => ModifyGuildPayload;

export const unwrapModifyGuildPayload = toApiCasing as (x: ModifyGuildPayload) => RawModifyGuildPayload;

export const wrapModifyGuildPayloadPartial = wrapModifyGuildPayload as (x: Partial<RawModifyGuildPayload>) => Partial<ModifyGuildPayload>;

export const unwrapModifyGuildPayloadPartial = unwrapModifyGuildPayload as (x: Partial<ModifyGuildPayload>) => Partial<RawModifyGuildPayload>;
