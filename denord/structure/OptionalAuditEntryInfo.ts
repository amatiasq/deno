import { RawOptionalAuditEntryInfo } from '../raw/RawOptionalAuditEntryInfo.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import {
	ChannelId,
	MessageId,
	RoleId,
	UserId,
} from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info

export interface OptionalAuditEntryInfo {
	/** number of days after which inactive members were kicked (Action Type: MEMBERPRUNE) */
	deleteMemberDays: string;
	/** number of members removed by the prune (Action Type: MEMBERPRUNE) */
	membersRemoved: string;
	/** channel in which the entities were targeted (Action Type: MEMBERMOVE & MESSAGEPIN & MESSAGEUNPIN & MESSAGEDELETE) */
	channelId: ChannelId;
	/** id of the message that was targeted (Action Type: MESSAGEPIN & MESSAGEUNPIN) */
	messageId: MessageId;
	/** number of entities that were targeted (Action Type: MESSAGEDELETE & MESSAGEBULKDELETE & MEMBERDISCONNECT & MEMBERMOVE) */
	count: string;
	/** id of the overwritten entity (Action Type: CHANNELOVERWRITECREATE & CHANNELOVERWRITEUPDATE & CHANNELOVERWRITEDELETE) */
	id: UserId | RoleId;
	/** type of overwritten entity ("member" or "role") (Action Type: CHANNELOVERWRITECREATE & CHANNELOVERWRITEUPDATE & CHANNELOVERWRITEDELETE) */
	type: 'member' | 'role';
	/** name of the role if type is "role" (Action Type: CHANNELOVERWRITECREATE & CHANNELOVERWRITEUPDATE & CHANNELOVERWRITEDELETE) */
	roleName: string;
}


export const wrapOptionalAuditEntryInfo = fromApiCasing as (x: RawOptionalAuditEntryInfo) => OptionalAuditEntryInfo;

export const unwrapOptionalAuditEntryInfo = toApiCasing as (x: OptionalAuditEntryInfo) => RawOptionalAuditEntryInfo;

export const wrapOptionalAuditEntryInfoPartial = wrapOptionalAuditEntryInfo as (x: Partial<RawOptionalAuditEntryInfo>) => Partial<OptionalAuditEntryInfo>;

export const unwrapOptionalAuditEntryInfoPartial = unwrapOptionalAuditEntryInfo as (x: Partial<OptionalAuditEntryInfo>) => Partial<RawOptionalAuditEntryInfo>;
