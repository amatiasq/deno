import { RoleId, PermissionInteger } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/topics/permissions#role-object-role-structure

export interface RawRole {
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
	permissions: PermissionInteger;
	/** whether this role is managed by an integration */
	managed: boolean;
	/** whether this role is mentionable */
	mentionable: boolean;
}
