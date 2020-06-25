import {
	UserId,
	ChannelId,
	integer,
	ApplicationId,
	PermissionInteger,
	EntityId,
} from '../internals/type-aliases.ts';
import { AuditLogChangeKey } from '../enum/AuditLogChangeKey.ts';
import { RawRole } from './RawRole.ts';
import { RawOverwrite } from './RawOverwrite.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure

/**
 * Object changed: guild
 * name changed
 */
interface RawAuditLogChange_NAME {
	key: AuditLogChangeKey.NAME;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: guild
 * icon changed
 */
interface RawAuditLogChange_ICON_HASH {
	key: AuditLogChangeKey.ICON_HASH;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: guild
 * invite splash page artwork changed
 */
interface RawAuditLogChange_SPLASH_HASH {
	key: AuditLogChangeKey.SPLASH_HASH;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: guild
 * owner changed
 */
interface RawAuditLogChange_OWNER_ID {
	key: AuditLogChangeKey.OWNER_ID;
	new_value?: UserId;
	old_value?: UserId;
}

/**
 * Object changed: guild
 * region changed
 */
interface RawAuditLogChange_REGION {
	key: AuditLogChangeKey.REGION;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: guild
 * afk channel changed
 */
interface RawAuditLogChange_AFK_CHANNEL_ID {
	key: AuditLogChangeKey.AFK_CHANNEL_ID;
	new_value?: ChannelId;
	old_value?: ChannelId;
}

/**
 * Object changed: guild
 * afk timeout duration changed
 */
interface RawAuditLogChange_AFK_TIMEOUT {
	key: AuditLogChangeKey.AFK_TIMEOUT;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: guild
 * two-factor auth requirement changed
 */
interface RawAuditLogChange_MFA_LEVEL {
	key: AuditLogChangeKey.MFA_LEVEL;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: guild
 * required verification level changed
 */
interface RawAuditLogChange_VERIFICATION_LEVEL {
	key: AuditLogChangeKey.VERIFICATION_LEVEL;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: guild
 * change in whose messages are scanned and deleted for explicit content in the server
 */
interface RawAuditLogChange_EXPLICIT_CONTENT_FILTER {
	key: AuditLogChangeKey.EXPLICIT_CONTENT_FILTER;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: guild
 * default message notification level changed
 */
interface RawAuditLogChange_DEFAULT_MESSAGE_NOTIFICATIONS {
	key: AuditLogChangeKey.DEFAULT_MESSAGE_NOTIFICATIONS;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: guild
 * guild invite vanity url changed
 */
interface RawAuditLogChange_VANITY_URL_CODE {
	key: AuditLogChangeKey.VANITY_URL_CODE;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: guild
 * array of partial role objects	new role added
 */
interface RawAuditLogChange_$ADD {
	key: AuditLogChangeKey.$ADD;
	new_value?: Partial<RawRole>[];
	old_value?: Partial<RawRole>[];
}

/**
 * Object changed: guild
 * array of partial role objects	role removed
 */
interface RawAuditLogChange_$REMOVE {
	key: AuditLogChangeKey.$REMOVE;
	new_value?: Partial<RawRole>[];
	old_value?: Partial<RawRole>[];
}

/**
 * Object changed: guild
 * change in number of days after which inactive and role-unassigned members are kicked
 */
interface RawAuditLogChange_PRUNE_DELETE_DAYS {
	key: AuditLogChangeKey.PRUNE_DELETE_DAYS;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: guild
 * server widget enabled/disable
 */
interface RawAuditLogChange_WIDGET_ENABLED {
	key: AuditLogChangeKey.WIDGET_ENABLED;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: guild
 * channel id of the server widget changed
 */
interface RawAuditLogChange_WIDGET_CHANNEL_ID {
	key: AuditLogChangeKey.WIDGET_CHANNEL_ID;
	new_value?: ChannelId;
	old_value?: ChannelId;
}

/**
 * Object changed: guild
 * id of the system channel changed
 */
interface RawAuditLogChange_SYSTEM_CHANNEL_ID {
	key: AuditLogChangeKey.SYSTEM_CHANNEL_ID;
	new_value?: ChannelId;
	old_value?: ChannelId;
}

/**
 * Object changed: channel
 * text or voice channel position changed
 */
interface RawAuditLogChange_POSITION {
	key: AuditLogChangeKey.POSITION;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: channel
 * text channel topic changed
 */
interface RawAuditLogChange_TOPIC {
	key: AuditLogChangeKey.TOPIC;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: channel
 * voice channel bitrate changed
 */
interface RawAuditLogChange_BITRATE {
	key: AuditLogChangeKey.BITRATE;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: channel
 * permissions on a channel changed
 */
interface RawAuditLogChange_PERMISSION_OVERWRITES {
	key: AuditLogChangeKey.PERMISSION_OVERWRITES;
	new_value?: RawOverwrite[];
	old_value?: RawOverwrite[];
}

/**
 * Object changed: channel
 * channel nsfw restriction changed
 */
interface RawAuditLogChange_NSFW {
	key: AuditLogChangeKey.NSFW;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: channel
 * application id of the added or removed webhook or bot
 */
interface RawAuditLogChange_APPLICATION_ID {
	key: AuditLogChangeKey.APPLICATION_ID;
	new_value?: ApplicationId;
	old_value?: ApplicationId;
}

/**
 * Object changed: channel
 * amount of seconds a user has to wait before sending another message changed
 */
interface RawAuditLogChange_RATE_LIMIT_PER_USER {
	key: AuditLogChangeKey.RATE_LIMIT_PER_USER;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: role
 * permissions for a role changed
 */
interface RawAuditLogChange_PERMISSIONS {
	key: AuditLogChangeKey.PERMISSIONS;
	new_value?: PermissionInteger;
	old_value?: PermissionInteger;
}

/**
 * Object changed: role
 * role color changed
 */
interface RawAuditLogChange_COLOR {
	key: AuditLogChangeKey.COLOR;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: role
 * role is now displayed/no longer displayed separate from online users
 */
interface RawAuditLogChange_HOIST {
	key: AuditLogChangeKey.HOIST;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: role
 * role is now mentionable/unmentionable
 */
interface RawAuditLogChange_MENTIONABLE {
	key: AuditLogChangeKey.MENTIONABLE;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: role
 * a permission on a text or voice channel was allowed for a role
 */
interface RawAuditLogChange_ALLOW {
	key: AuditLogChangeKey.ALLOW;
	new_value?: PermissionInteger;
	old_value?: PermissionInteger;
}

/**
 * Object changed: role
 * a permission on a text or voice channel was denied for a role
 */
interface RawAuditLogChange_DENY {
	key: AuditLogChangeKey.DENY;
	new_value?: PermissionInteger;
	old_value?: PermissionInteger;
}

/**
 * Object changed: invite
 * invite code changed
 */
interface RawAuditLogChange_CODE {
	key: AuditLogChangeKey.CODE;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: invite
 * channel for invite code changed
 */
interface RawAuditLogChange_CHANNEL_ID {
	key: AuditLogChangeKey.CHANNEL_ID;
	new_value?: ChannelId;
	old_value?: ChannelId;
}

/**
 * Object changed: invite
 * person who created invite code changed
 */
interface RawAuditLogChange_INVITER_ID {
	key: AuditLogChangeKey.INVITER_ID;
	new_value?: UserId;
	old_value?: UserId;
}

/**
 * Object changed: invite
 * change to max number of times invite code can be used
 */
interface RawAuditLogChange_MAX_USES {
	key: AuditLogChangeKey.MAX_USES;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: invite
 * number of times invite code used changed
 */
interface RawAuditLogChange_USES {
	key: AuditLogChangeKey.USES;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: invite
 * how long invite code lasts changed
 */
interface RawAuditLogChange_MAX_AGE {
	key: AuditLogChangeKey.MAX_AGE;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: invite
 * invite code is temporary/never expires
 */
interface RawAuditLogChange_TEMPORARY {
	key: AuditLogChangeKey.TEMPORARY;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: user
 * user server deafened/undeafened
 */
interface RawAuditLogChange_DEAF {
	key: AuditLogChangeKey.DEAF;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: user
 * user server muted/unmuted
 */
interface RawAuditLogChange_MUTE {
	key: AuditLogChangeKey.MUTE;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: user
 * user nickname changed
 */
interface RawAuditLogChange_NICK {
	key: AuditLogChangeKey.NICK;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: user
 * user avatar changed
 */
interface RawAuditLogChange_AVATAR_HASH {
	key: AuditLogChangeKey.AVATAR_HASH;
	new_value?: string;
	old_value?: string;
}

/**
 * Object changed: any
 * the id of the changed entity - sometimes used in conjunction with other keys
 */
interface RawAuditLogChange_ID {
	key: AuditLogChangeKey.ID;
	new_value?: EntityId;
	old_value?: EntityId;
}

/**
 * Object changed: any
 * (channel type) or string	type of entity created
 */
interface RawAuditLogChange_TYPE {
	key: AuditLogChangeKey.TYPE;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: integration
 * integration emoticons enabled/disabled
 */
interface RawAuditLogChange_ENABLE_EMOTICONS {
	key: AuditLogChangeKey.ENABLE_EMOTICONS;
	new_value?: boolean;
	old_value?: boolean;
}

/**
 * Object changed: integration
 * integration expiring subscriber behavior changed
 */
interface RawAuditLogChange_EXPIRE_BEHAVIOR {
	key: AuditLogChangeKey.EXPIRE_BEHAVIOR;
	new_value?: integer;
	old_value?: integer;
}

/**
 * Object changed: integration
 * integration expire grace period changed
 */
interface RawAuditLogChange_EXPIRE_GRACE_PERIOD {
	key: AuditLogChangeKey.EXPIRE_GRACE_PERIOD;
	new_value?: integer;
	old_value?: integer;
}

export type RawAuditLogChange =
	| RawAuditLogChange_NAME
	| RawAuditLogChange_ICON_HASH
	| RawAuditLogChange_SPLASH_HASH
	| RawAuditLogChange_OWNER_ID
	| RawAuditLogChange_REGION
	| RawAuditLogChange_AFK_CHANNEL_ID
	| RawAuditLogChange_AFK_TIMEOUT
	| RawAuditLogChange_MFA_LEVEL
	| RawAuditLogChange_VERIFICATION_LEVEL
	| RawAuditLogChange_EXPLICIT_CONTENT_FILTER
	| RawAuditLogChange_DEFAULT_MESSAGE_NOTIFICATIONS
	| RawAuditLogChange_VANITY_URL_CODE
	| RawAuditLogChange_$ADD
	| RawAuditLogChange_$REMOVE
	| RawAuditLogChange_PRUNE_DELETE_DAYS
	| RawAuditLogChange_WIDGET_ENABLED
	| RawAuditLogChange_WIDGET_CHANNEL_ID
	| RawAuditLogChange_SYSTEM_CHANNEL_ID
	| RawAuditLogChange_POSITION
	| RawAuditLogChange_TOPIC
	| RawAuditLogChange_BITRATE
	| RawAuditLogChange_PERMISSION_OVERWRITES
	| RawAuditLogChange_NSFW
	| RawAuditLogChange_APPLICATION_ID
	| RawAuditLogChange_RATE_LIMIT_PER_USER
	| RawAuditLogChange_PERMISSIONS
	| RawAuditLogChange_COLOR
	| RawAuditLogChange_HOIST
	| RawAuditLogChange_MENTIONABLE
	| RawAuditLogChange_ALLOW
	| RawAuditLogChange_DENY
	| RawAuditLogChange_CODE
	| RawAuditLogChange_CHANNEL_ID
	| RawAuditLogChange_INVITER_ID
	| RawAuditLogChange_MAX_USES
	| RawAuditLogChange_USES
	| RawAuditLogChange_MAX_AGE
	| RawAuditLogChange_TEMPORARY
	| RawAuditLogChange_DEAF
	| RawAuditLogChange_MUTE
	| RawAuditLogChange_NICK
	| RawAuditLogChange_AVATAR_HASH
	| RawAuditLogChange_ID
	| RawAuditLogChange_TYPE
	| RawAuditLogChange_ENABLE_EMOTICONS
	| RawAuditLogChange_EXPIRE_BEHAVIOR
	| RawAuditLogChange_EXPIRE_GRACE_PERIOD;
