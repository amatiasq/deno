import { RawOptionalAuditEntryInfo } from '../raw/RawOptionalAuditEntryInfo.ts';
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


export function wrapOptionalAuditEntryInfo(x: RawOptionalAuditEntryInfo): OptionalAuditEntryInfo {
	return {
		...x,
		deleteMemberDays: x.delete_member_days,
		membersRemoved: x.members_removed,
		channelId: x.channel_id,
		messageId: x.message_id,
		roleName: x.role_name,
	};
}

export function unwrapOptionalAuditEntryInfo(x: OptionalAuditEntryInfo): RawOptionalAuditEntryInfo {
	return {
		...x,
		delete_member_days: x.deleteMemberDays,
		members_removed: x.membersRemoved,
		channel_id: x.channelId,
		message_id: x.messageId,
		role_name: x.roleName,
	};
}

export function wrapOptionalAuditEntryInfoPartial(x: Partial<RawOptionalAuditEntryInfo>): Partial<OptionalAuditEntryInfo> {
	return {
		...x,
		deleteMemberDays: x.delete_member_days && x.delete_member_days,
		membersRemoved: x.members_removed && x.members_removed,
		channelId: x.channel_id && x.channel_id,
		messageId: x.message_id && x.message_id,
		roleName: x.role_name && x.role_name,
	};
}

export function unwrapOptionalAuditEntryInfoPartial(x: Partial<OptionalAuditEntryInfo>): Partial<RawOptionalAuditEntryInfo> {
	return {
		...x,
		delete_member_days: x.deleteMemberDays && x.deleteMemberDays,
		members_removed: x.membersRemoved && x.membersRemoved,
		channel_id: x.channelId && x.channelId,
		message_id: x.messageId && x.messageId,
		role_name: x.roleName && x.roleName,
	};
}
