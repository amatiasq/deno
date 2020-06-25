import { RawWebhook } from './RawWebhook.ts';
import { RawUser } from './RawUser.ts';
import { RawAuditLogEntry } from './RawAuditLogEntry.ts';
import { RawIntegration } from './RawIntegration.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure
export interface RawAuditLog {
	/** list of webhooks found in the audit log */
	webhooks: RawWebhook[];
	/** list of users found in the audit log */
	users: RawUser[];
	/** list of audit log entries */
	audit_log_entries: RawAuditLogEntry[];
	/** list of partial integration objects */
	integrations: Partial<RawIntegration>[];
}
