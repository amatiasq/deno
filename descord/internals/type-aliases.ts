import { Intent } from '../enum/Intent.ts';
import { Permission } from '../enum/Permission.ts';
import { SystemChannelFlag } from '../enum/SystemChannelFlag.ts';
import { UserFlag } from '../enum/UserFlag.ts';

export type integer = number;
export type OverwriteId = UserId | RoleId;
export type EntityId =
	| UserId
	| RoleId
	| GuildId
	| ChannelId
	| MessageId
	| EmojiId
	| IntegrationId
	| PartyId
	| ApplicationId
	| CategoryId
	| AttachmentId
	| WebhookId
	| VoiceRegionId
	| AccountId
	| InviteCode
	| AuditLogEntryId;

export type UserId = 'snowflake UserId';
export type RoleId = 'snowflake RoleId';
export type GuildId = 'snowflake GuildId';
export type ChannelId = 'snowflake ChannelId';
export type MessageId = 'snowflake MessageId';
export type EmojiId = 'snowflake EmojiId';
export type IntegrationId = 'snowflake IntegrationId';
export type PartyId = 'snowflake PartyId';
export type ApplicationId = 'snowflake ApplicationId';
export type CategoryId = 'snowflake CategoryId';
export type AttachmentId = 'snowflake AttachmentId';
export type WebhookId = 'snowflake WebhookId';
export type VoiceRegionId = 'snowflake VoiceRegionId';
export type AccountId = 'snowflake AccountId';
export type InviteCode = 'snowflake InviteCode';
export type AuditLogEntryId = 'snowflake AuditLogEntryId';

export type ImageData = 'serialized ImageData';
export type ISO8601Timestamp = 'serialized ISO8601Timestamp';
export type UnixTimestamp = 'serialized UnixTimestamp';

export type IntentInteger = 'flag integer IntentInteger';
export type PermissionInteger = 'flag integer PermissionInteger';
export type SystemChannelFlagInteger = 'flag integer SystemChannelFlagInteger';
export type UserFlagInteger = 'flag integer UserFlagInteger';

export { Intent, Permission, SystemChannelFlag, UserFlag };

export const {
	parse: parseIntentInteger,
	unparse: unparseIntentInteger,
} = bitFlags<Intent, IntentInteger>(Intent);

export const {
	parse: parsePermissionInteger,
	unparse: unparsePermissionInteger,
} = bitFlags<Permission, PermissionInteger>(Permission);

export const {
	parse: parseSystemChannelFlagInteger,
	unparse: unparseSystemChannelFlagInteger,
} = bitFlags<SystemChannelFlag, SystemChannelFlagInteger>(SystemChannelFlag);

export const {
	parse: parseUserFlagInteger,
	unparse: unparseUserFlagInteger,
} = bitFlags<UserFlag, UserFlagInteger>(UserFlag);

export function parseISO8601Timestamp(value: ISO8601Timestamp) {
	return new Date(value);
}

export function unparseISO8601Timestamp(value: Date): ISO8601Timestamp {
	throw new Error('Not implemented');
}

export function parseUnixTimestamp(value: UnixTimestamp) {
	const asNumber = (value as any) as number;
	return new Date(asNumber * 1000);
}

export function unparseUnixTimestamp(value: Date): UnixTimestamp {
	return (Number(value) * 1000) as any;
}

function bitFlags<T extends number, U extends string>(Enum: any) {
	return {
		parse: (value: U): T[] => {
			const flags = (value as any) as number;
			const keys = Object.keys(Enum);
			return keys.filter(x => flags & Enum[x]).map(x => Enum[x]);
		},
		unparse: (value: T[]): U => {
			return value.reduce((flags, x) => flags | x, 0) as any;
		},
	};
}
