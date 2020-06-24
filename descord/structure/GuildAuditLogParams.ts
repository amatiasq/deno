import { RawGuildAuditLogParams } from '../raw/RawGuildAuditLogParams.ts';
import { UserId, AuditLogEntryId, integer } from '../internals/type-aliases.ts';
import { AuditLogEvent } from '../enum/AuditLogEvent.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-key

export interface GuildAuditLogParams {
	/** filter the log for actions made by a user */
	userId?: UserId;
	/** the type of audit log event */
	actionType?: AuditLogEvent;
	/** filter the log before a certain entry id */
	before?: AuditLogEntryId;
	/** how many entries are returned (default 50, minimum 1, maximum 100) */
	limit?: integer;
}


export function wrapGuildAuditLogParams(x: RawGuildAuditLogParams): GuildAuditLogParams {
	return {
		...x,
		userId: x.user_id && x.user_id,
		actionType: x.action_type && x.action_type,
	};
}

export function unwrapGuildAuditLogParams(x: GuildAuditLogParams): RawGuildAuditLogParams {
	return {
		...x,
		user_id: x.userId && x.userId,
		action_type: x.actionType && x.actionType,
	};
}

export const wrapGuildAuditLogParamsPartial = wrapGuildAuditLogParams as (x: Partial<RawGuildAuditLogParams>) => Partial<GuildAuditLogParams>;

export const unwrapGuildAuditLogParamsPartial = unwrapGuildAuditLogParams as (x: Partial<GuildAuditLogParams>) => Partial<RawGuildAuditLogParams>;
