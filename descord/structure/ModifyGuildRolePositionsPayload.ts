import { RawModifyGuildRolePositionsPayload } from '../raw/RawModifyGuildRolePositionsPayload.ts';
import { RoleId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-json-params

export interface ModifyGuildRolePositionsPayload {
	/** role */
	id: RoleId;
	/** sorting position of the role */
	position?: integer;
}


export function wrapModifyGuildRolePositionsPayload(x: RawModifyGuildRolePositionsPayload): ModifyGuildRolePositionsPayload {
	return x;
}

export function unwrapModifyGuildRolePositionsPayload(x: ModifyGuildRolePositionsPayload): RawModifyGuildRolePositionsPayload {
	return x;
}

export const wrapModifyGuildRolePositionsPayloadPartial = wrapModifyGuildRolePositionsPayload as (x: Partial<RawModifyGuildRolePositionsPayload>) => Partial<ModifyGuildRolePositionsPayload>;

export const unwrapModifyGuildRolePositionsPayloadPartial = unwrapModifyGuildRolePositionsPayload as (x: Partial<ModifyGuildRolePositionsPayload>) => Partial<RawModifyGuildRolePositionsPayload>;
