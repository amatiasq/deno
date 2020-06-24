import { AuditLogEvent } from '../enum/AuditLogEvent.ts';
import { AuditLogEntryId, UserId } from '../internals/type-aliases.ts';
import { RawOptionalAuditEntryInfo } from './RawOptionalAuditEntryInfo.ts';
import { RawAuditLogChange } from './RawAuditLogChange.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure
export interface RawAuditLogEntry {
	/** id of the affected entity (webhook, user, role, etc.) */
	target_id?: string;
	/** changes made to the target_id */
	changes?: RawAuditLogChange[];
	/** the user who made the changes */
	user_id: UserId;
	/** id of the entry */
	id: AuditLogEntryId;
	/** type of action that occurred */
	action_type: AuditLogEvent;
	/** additional info for certain action types */
	options?: RawOptionalAuditEntryInfo;
	/** the reason for the change (0-512 characters) */
	reason?: string;
}
