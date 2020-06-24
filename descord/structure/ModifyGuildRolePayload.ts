import { RawModifyGuildRolePayload } from '../raw/RawModifyGuildRolePayload.ts';
import { Permission, parsePermissionInteger, unparsePermissionInteger, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-role-json-params

export interface ModifyGuildRolePayload {
	/** name of the role */
	name?: string;
	/** bitwise value of the enabled/disabled permissions */
	permissions?: Permission[];
	/** RGB color value */
	color?: integer;
	/** whether the role should be displayed separately in the sidebar */
	hoist?: boolean;
	/** whether the role should be mentionable */
	mentionable?: boolean;
}


export function wrapModifyGuildRolePayload(x: RawModifyGuildRolePayload): ModifyGuildRolePayload {
	return {
		...x,
		permissions: x.permissions && parsePermissionInteger(x.permissions),
	};
}

export function unwrapModifyGuildRolePayload(x: ModifyGuildRolePayload): RawModifyGuildRolePayload {
	return {
		...x,
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
	};
}

export const wrapModifyGuildRolePayloadPartial = wrapModifyGuildRolePayload as (x: Partial<RawModifyGuildRolePayload>) => Partial<ModifyGuildRolePayload>;

export const unwrapModifyGuildRolePayloadPartial = unwrapModifyGuildRolePayload as (x: Partial<ModifyGuildRolePayload>) => Partial<RawModifyGuildRolePayload>;
