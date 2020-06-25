import { RawGuildAuditLogParams } from '../raw/RawGuildAuditLogParams.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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


export const wrapGuildAuditLogParams = fromApiCasing as (x: RawGuildAuditLogParams) => GuildAuditLogParams;

export const unwrapGuildAuditLogParams = toApiCasing as (x: GuildAuditLogParams) => RawGuildAuditLogParams;

export const wrapGuildAuditLogParamsPartial = wrapGuildAuditLogParams as (x: Partial<RawGuildAuditLogParams>) => Partial<GuildAuditLogParams>;

export const unwrapGuildAuditLogParamsPartial = unwrapGuildAuditLogParams as (x: Partial<GuildAuditLogParams>) => Partial<RawGuildAuditLogParams>;
