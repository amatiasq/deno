import { RawRole } from '../raw/RawRole.ts';
import { RoleId, Permission, parsePermissionInteger, unparsePermissionInteger } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/topics/permissions#role-object-role-structure

export interface Role {
	/** role id */
	id: RoleId;
	/** role name */
	name: string;
	/** integer representation of hexadecimal color code */
	color: number;
	/** if this role is pinned in the user listing */
	hoist: boolean;
	/** position of this role */
	position: number;
	/** permission bit set */
	permissions: Permission[];
	/** whether this role is managed by an integration */
	managed: boolean;
	/** whether this role is mentionable */
	mentionable: boolean;
}


export function wrapRole(x: RawRole): Role {
	return {
		...x,
		permissions: parsePermissionInteger(x.permissions),
	};
}

export function unwrapRole(x: Role): RawRole {
	return {
		...x,
		permissions: unparsePermissionInteger(x.permissions),
	};
}

export function wrapRolePartial(x: Partial<RawRole>): Partial<Role> {
	return {
		...x,
		permissions: x.permissions && parsePermissionInteger(x.permissions),
	};
}

export function unwrapRolePartial(x: Partial<Role>): Partial<RawRole> {
	return {
		...x,
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
	};
}
