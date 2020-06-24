import { RawAuditLog } from '../raw/RawAuditLog.ts';
import { Webhook, wrapWebhook, unwrapWebhook } from './Webhook.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { AuditLogEntry, wrapAuditLogEntry, unwrapAuditLogEntry } from './AuditLogEntry.ts';
import { Integration, wrapIntegrationPartial, unwrapIntegrationPartial } from './Integration.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure

export interface AuditLog {
	/** list of webhooks found in the audit log */
	webhooks: Webhook[];
	/** list of users found in the audit log */
	users: User[];
	/** list of audit log entries */
	auditLogEntries: AuditLogEntry[];
	/** list of partial integration objects */
	integrations: Partial<Integration>[];
}


export function wrapAuditLog(x: RawAuditLog): AuditLog {
	return {
		...x,
		webhooks: x.webhooks.map(wrapWebhook),
		users: x.users.map(wrapUser),
		auditLogEntries: x.audit_log_entries.map(wrapAuditLogEntry),
		integrations: x.integrations.map(wrapIntegrationPartial),
	};
}

export function unwrapAuditLog(x: AuditLog): RawAuditLog {
	return {
		...x,
		webhooks: x.webhooks.map(unwrapWebhook),
		users: x.users.map(unwrapUser),
		audit_log_entries: x.auditLogEntries.map(unwrapAuditLogEntry),
		integrations: x.integrations.map(unwrapIntegrationPartial),
	};
}

export function wrapAuditLogPartial(x: Partial<RawAuditLog>): Partial<AuditLog> {
	return {
		...x,
		webhooks: x.webhooks && x.webhooks.map(wrapWebhook),
		users: x.users && x.users.map(wrapUser),
		auditLogEntries: x.audit_log_entries && x.audit_log_entries.map(wrapAuditLogEntry),
		integrations: x.integrations && x.integrations.map(wrapIntegrationPartial),
	};
}

export function unwrapAuditLogPartial(x: Partial<AuditLog>): Partial<RawAuditLog> {
	return {
		...x,
		webhooks: x.webhooks && x.webhooks.map(unwrapWebhook),
		users: x.users && x.users.map(unwrapUser),
		audit_log_entries: x.auditLogEntries && x.auditLogEntries.map(unwrapAuditLogEntry),
		integrations: x.integrations && x.integrations.map(unwrapIntegrationPartial),
	};
}
