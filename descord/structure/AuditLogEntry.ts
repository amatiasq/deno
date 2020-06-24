import { RawAuditLogEntry } from '../raw/RawAuditLogEntry.ts';
import { AuditLogEvent } from '../enum/AuditLogEvent.ts';
import { AuditLogEntryId, UserId } from '../internals/type-aliases.ts';
import { OptionalAuditEntryInfo, wrapOptionalAuditEntryInfo, unwrapOptionalAuditEntryInfo } from './OptionalAuditEntryInfo.ts';
import { AuditLogChange, wrapAuditLogChange, unwrapAuditLogChange } from './AuditLogChange.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure

export interface AuditLogEntry {
	/** id of the affected entity (webhook, user, role, etc.) */
	targetId?: string;
	/** changes made to the targetId */
	changes?: AuditLogChange[];
	/** the user who made the changes */
	userId: UserId;
	/** id of the entry */
	id: AuditLogEntryId;
	/** type of action that occurred */
	actionType: AuditLogEvent;
	/** additional info for certain action types */
	options?: OptionalAuditEntryInfo;
	/** the reason for the change (0-512 characters) */
	reason?: string;
}


export function wrapAuditLogEntry(x: RawAuditLogEntry): AuditLogEntry {
	return {
		...x,
		targetId: x.target_id && x.target_id,
		changes: x.changes && x.changes.map(wrapAuditLogChange),
		userId: x.user_id,
		actionType: x.action_type,
		options: x.options && wrapOptionalAuditEntryInfo(x.options),
	};
}

export function unwrapAuditLogEntry(x: AuditLogEntry): RawAuditLogEntry {
	return {
		...x,
		target_id: x.targetId && x.targetId,
		changes: x.changes && x.changes.map(unwrapAuditLogChange),
		user_id: x.userId,
		action_type: x.actionType,
		options: x.options && unwrapOptionalAuditEntryInfo(x.options),
	};
}

export function wrapAuditLogEntryPartial(x: Partial<RawAuditLogEntry>): Partial<AuditLogEntry> {
	return {
		...x,
		targetId: x.target_id && x.target_id,
		changes: x.changes && x.changes.map(wrapAuditLogChange),
		userId: x.user_id && x.user_id,
		actionType: x.action_type && x.action_type,
		options: x.options && wrapOptionalAuditEntryInfo(x.options),
	};
}

export function unwrapAuditLogEntryPartial(x: Partial<AuditLogEntry>): Partial<RawAuditLogEntry> {
	return {
		...x,
		target_id: x.targetId && x.targetId,
		changes: x.changes && x.changes.map(unwrapAuditLogChange),
		user_id: x.userId && x.userId,
		action_type: x.actionType && x.actionType,
		options: x.options && unwrapOptionalAuditEntryInfo(x.options),
	};
}
