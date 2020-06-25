import { AuditLogChangeKey } from '../enum/AuditLogChangeKey.ts';
import { RawAuditLogChange } from '../raw/RawAuditLogChange.ts';
import {
	ApplicationId,
	ChannelId,
	integer,
	PermissionInteger,
	UserId,
	parsePermissionInteger,
	EntityId,
} from '../internals/type-aliases.ts';
import { Overwrite, wrapOverwrite } from './Overwrite.ts';
import { Role, wrapRolePartial } from './Role.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure

/**
 * Object changed: guild
 * name changed
 */
interface AuditLogChange_NAME {
	key: AuditLogChangeKey.NAME;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: guild
 * icon changed
 */
interface AuditLogChange_ICON_HASH {
	key: AuditLogChangeKey.ICON_HASH;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: guild
 * invite splash page artwork changed
 */
interface AuditLogChange_SPLASH_HASH {
	key: AuditLogChangeKey.SPLASH_HASH;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: guild
 * owner changed
 */
interface AuditLogChange_OWNER_ID {
	key: AuditLogChangeKey.OWNER_ID;
	newValue?: UserId;
	oldValue?: UserId;
}

/**
 * Object changed: guild
 * region changed
 */
interface AuditLogChange_REGION {
	key: AuditLogChangeKey.REGION;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: guild
 * afk channel changed
 */
interface AuditLogChange_AFK_CHANNEL_ID {
	key: AuditLogChangeKey.AFK_CHANNEL_ID;
	newValue?: ChannelId;
	oldValue?: ChannelId;
}

/**
 * Object changed: guild
 * afk timeout duration changed
 */
interface AuditLogChange_AFK_TIMEOUT {
	key: AuditLogChangeKey.AFK_TIMEOUT;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: guild
 * two-factor auth requirement changed
 */
interface AuditLogChange_MFA_LEVEL {
	key: AuditLogChangeKey.MFA_LEVEL;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: guild
 * required verification level changed
 */
interface AuditLogChange_VERIFICATION_LEVEL {
	key: AuditLogChangeKey.VERIFICATION_LEVEL;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: guild
 * change in whose messages are scanned and deleted for explicit content in the server
 */
interface AuditLogChange_EXPLICIT_CONTENT_FILTER {
	key: AuditLogChangeKey.EXPLICIT_CONTENT_FILTER;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: guild
 * default message notification level changed
 */
interface AuditLogChange_DEFAULT_MESSAGE_NOTIFICATIONS {
	key: AuditLogChangeKey.DEFAULT_MESSAGE_NOTIFICATIONS;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: guild
 * guild invite vanity url changed
 */
interface AuditLogChange_VANITY_URL_CODE {
	key: AuditLogChangeKey.VANITY_URL_CODE;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: guild
 * array of partial role objects	new role added
 */
interface AuditLogChange_$ADD {
	key: AuditLogChangeKey.$ADD;
	newValue?: Partial<Role>[];
	oldValue?: Partial<Role>[];
}

/**
 * Object changed: guild
 * array of partial role objects	role removed
 */
interface AuditLogChange_$REMOVE {
	key: AuditLogChangeKey.$REMOVE;
	newValue?: Partial<Role>[];
	oldValue?: Partial<Role>[];
}

/**
 * Object changed: guild
 * change in number of days after which inactive and role-unassigned members are kicked
 */
interface AuditLogChange_PRUNE_DELETE_DAYS {
	key: AuditLogChangeKey.PRUNE_DELETE_DAYS;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: guild
 * server widget enabled/disable
 */
interface AuditLogChange_WIDGET_ENABLED {
	key: AuditLogChangeKey.WIDGET_ENABLED;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: guild
 * channel id of the server widget changed
 */
interface AuditLogChange_WIDGET_CHANNEL_ID {
	key: AuditLogChangeKey.WIDGET_CHANNEL_ID;
	newValue?: ChannelId;
	oldValue?: ChannelId;
}

/**
 * Object changed: guild
 * id of the system channel changed
 */
interface AuditLogChange_SYSTEM_CHANNEL_ID {
	key: AuditLogChangeKey.SYSTEM_CHANNEL_ID;
	newValue?: ChannelId;
	oldValue?: ChannelId;
}

/**
 * Object changed: channel
 * text or voice channel position changed
 */
interface AuditLogChange_POSITION {
	key: AuditLogChangeKey.POSITION;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: channel
 * text channel topic changed
 */
interface AuditLogChange_TOPIC {
	key: AuditLogChangeKey.TOPIC;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: channel
 * voice channel bitrate changed
 */
interface AuditLogChange_BITRATE {
	key: AuditLogChangeKey.BITRATE;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: channel
 * permissions on a channel changed
 */
interface AuditLogChange_PERMISSION_OVERWRITES {
	key: AuditLogChangeKey.PERMISSION_OVERWRITES;
	newValue?: Overwrite[];
	oldValue?: Overwrite[];
}

/**
 * Object changed: channel
 * channel nsfw restriction changed
 */
interface AuditLogChange_NSFW {
	key: AuditLogChangeKey.NSFW;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: channel
 * application id of the added or removed webhook or bot
 */
interface AuditLogChange_APPLICATION_ID {
	key: AuditLogChangeKey.APPLICATION_ID;
	newValue?: ApplicationId;
	oldValue?: ApplicationId;
}

/**
 * Object changed: channel
 * amount of seconds a user has to wait before sending another message changed
 */
interface AuditLogChange_RATE_LIMIT_PER_USER {
	key: AuditLogChangeKey.RATE_LIMIT_PER_USER;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: role
 * permissions for a role changed
 */
interface AuditLogChange_PERMISSIONS {
	key: AuditLogChangeKey.PERMISSIONS;
	newValue?: PermissionInteger;
	oldValue?: PermissionInteger;
}

/**
 * Object changed: role
 * role color changed
 */
interface AuditLogChange_COLOR {
	key: AuditLogChangeKey.COLOR;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: role
 * role is now displayed/no longer displayed separate from online users
 */
interface AuditLogChange_HOIST {
	key: AuditLogChangeKey.HOIST;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: role
 * role is now mentionable/unmentionable
 */
interface AuditLogChange_MENTIONABLE {
	key: AuditLogChangeKey.MENTIONABLE;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: role
 * a permission on a text or voice channel was allowed for a role
 */
interface AuditLogChange_ALLOW {
	key: AuditLogChangeKey.ALLOW;
	newValue?: PermissionInteger;
	oldValue?: PermissionInteger;
}

/**
 * Object changed: role
 * a permission on a text or voice channel was denied for a role
 */
interface AuditLogChange_DENY {
	key: AuditLogChangeKey.DENY;
	newValue?: PermissionInteger;
	oldValue?: PermissionInteger;
}

/**
 * Object changed: invite
 * invite code changed
 */
interface AuditLogChange_CODE {
	key: AuditLogChangeKey.CODE;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: invite
 * channel for invite code changed
 */
interface AuditLogChange_CHANNEL_ID {
	key: AuditLogChangeKey.CHANNEL_ID;
	newValue?: ChannelId;
	oldValue?: ChannelId;
}

/**
 * Object changed: invite
 * person who created invite code changed
 */
interface AuditLogChange_INVITER_ID {
	key: AuditLogChangeKey.INVITER_ID;
	newValue?: UserId;
	oldValue?: UserId;
}

/**
 * Object changed: invite
 * change to max number of times invite code can be used
 */
interface AuditLogChange_MAX_USES {
	key: AuditLogChangeKey.MAX_USES;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: invite
 * number of times invite code used changed
 */
interface AuditLogChange_USES {
	key: AuditLogChangeKey.USES;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: invite
 * how long invite code lasts changed
 */
interface AuditLogChange_MAX_AGE {
	key: AuditLogChangeKey.MAX_AGE;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: invite
 * invite code is temporary/never expires
 */
interface AuditLogChange_TEMPORARY {
	key: AuditLogChangeKey.TEMPORARY;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: user
 * user server deafened/undeafened
 */
interface AuditLogChange_DEAF {
	key: AuditLogChangeKey.DEAF;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: user
 * user server muted/unmuted
 */
interface AuditLogChange_MUTE {
	key: AuditLogChangeKey.MUTE;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: user
 * user nickname changed
 */
interface AuditLogChange_NICK {
	key: AuditLogChangeKey.NICK;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: user
 * user avatar changed
 */
interface AuditLogChange_AVATAR_HASH {
	key: AuditLogChangeKey.AVATAR_HASH;
	newValue?: string;
	oldValue?: string;
}

/**
 * Object changed: any
 * the id of the changed entity - sometimes used in conjunction with other keys
 */
interface AuditLogChange_ID {
	key: AuditLogChangeKey.ID;
	newValue?: EntityId;
	oldValue?: EntityId;
}

/**
 * Object changed: any
 * (channel type) or string	type of entity created
 */
interface AuditLogChange_TYPE {
	key: AuditLogChangeKey.TYPE;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: integration
 * integration emoticons enabled/disabled
 */
interface AuditLogChange_ENABLE_EMOTICONS {
	key: AuditLogChangeKey.ENABLE_EMOTICONS;
	newValue?: boolean;
	oldValue?: boolean;
}

/**
 * Object changed: integration
 * integration expiring subscriber behavior changed
 */
interface AuditLogChange_EXPIRE_BEHAVIOR {
	key: AuditLogChangeKey.EXPIRE_BEHAVIOR;
	newValue?: integer;
	oldValue?: integer;
}

/**
 * Object changed: integration
 * integration expire grace period changed
 */
interface AuditLogChange_EXPIRE_GRACE_PERIOD {
	key: AuditLogChangeKey.EXPIRE_GRACE_PERIOD;
	newValue?: integer;
	oldValue?: integer;
}

export type AuditLogChange =
	| AuditLogChange_NAME
	| AuditLogChange_ICON_HASH
	| AuditLogChange_SPLASH_HASH
	| AuditLogChange_OWNER_ID
	| AuditLogChange_REGION
	| AuditLogChange_AFK_CHANNEL_ID
	| AuditLogChange_AFK_TIMEOUT
	| AuditLogChange_MFA_LEVEL
	| AuditLogChange_VERIFICATION_LEVEL
	| AuditLogChange_EXPLICIT_CONTENT_FILTER
	| AuditLogChange_DEFAULT_MESSAGE_NOTIFICATIONS
	| AuditLogChange_VANITY_URL_CODE
	| AuditLogChange_$ADD
	| AuditLogChange_$REMOVE
	| AuditLogChange_PRUNE_DELETE_DAYS
	| AuditLogChange_WIDGET_ENABLED
	| AuditLogChange_WIDGET_CHANNEL_ID
	| AuditLogChange_SYSTEM_CHANNEL_ID
	| AuditLogChange_POSITION
	| AuditLogChange_TOPIC
	| AuditLogChange_BITRATE
	| AuditLogChange_PERMISSION_OVERWRITES
	| AuditLogChange_NSFW
	| AuditLogChange_APPLICATION_ID
	| AuditLogChange_RATE_LIMIT_PER_USER
	| AuditLogChange_PERMISSIONS
	| AuditLogChange_COLOR
	| AuditLogChange_HOIST
	| AuditLogChange_MENTIONABLE
	| AuditLogChange_ALLOW
	| AuditLogChange_DENY
	| AuditLogChange_CODE
	| AuditLogChange_CHANNEL_ID
	| AuditLogChange_INVITER_ID
	| AuditLogChange_MAX_USES
	| AuditLogChange_USES
	| AuditLogChange_MAX_AGE
	| AuditLogChange_TEMPORARY
	| AuditLogChange_DEAF
	| AuditLogChange_MUTE
	| AuditLogChange_NICK
	| AuditLogChange_AVATAR_HASH
	| AuditLogChange_ID
	| AuditLogChange_TYPE
	| AuditLogChange_ENABLE_EMOTICONS
	| AuditLogChange_EXPIRE_BEHAVIOR
	| AuditLogChange_EXPIRE_GRACE_PERIOD;

export function wrapAuditLogChange(x: RawAuditLogChange): AuditLogChange {
	let wrapper: any;

	switch (x.key) {
		case AuditLogChangeKey.$ADD:
		case AuditLogChangeKey.$REMOVE:
			wrapper = wrapRolePartial;
			break;
		case AuditLogChangeKey.PERMISSION_OVERWRITES:
			wrapper = wrapOverwrite;
			break;
		case AuditLogChangeKey.PERMISSIONS:
		case AuditLogChangeKey.ALLOW:
		case AuditLogChangeKey.DENY:
			wrapper = parsePermissionInteger;
			break;
	}

	return {
		key: x.key as any,
		newValue: x.new_value && wrapper(x.new_value),
		oldValue: x.old_value && wrapper(x.old_value),
	};
}

export function unwrapAuditLogChange(x: RawAuditLogChange): AuditLogChange {
	throw new Error('Not implemented');
}
