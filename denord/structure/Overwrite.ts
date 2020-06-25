import { RawOverwrite } from '../raw/RawOverwrite.ts';
import {
	parsePermissionInteger,
	Permission,
	RoleId,
	unparsePermissionInteger,
	UserId,
} from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure

interface Overwrite_Role {
	/** role or user id */
	id: RoleId;
	/** either "role" or "member" */
	type: 'role';
	/** permission bit set */
	allow: Permission[];
	/** permission bit set */
	deny: Permission[];
}

interface Overwrite_Member {
	/** role or user id */
	id: UserId;
	/** either "role" or "member" */
	type: 'member';
	/** permission bit set */
	allow: Permission[];
	/** permission bit set */
	deny: Permission[];
}

export type Overwrite = Overwrite_Role | Overwrite_Member;

export function wrapOverwrite(x: RawOverwrite): Overwrite {
	return {
		...x,
		allow: parsePermissionInteger(x.allow),
		deny: parsePermissionInteger(x.deny),
	};
}

export function unwrapOverwrite(x: Overwrite): RawOverwrite {
	return {
		...x,
		allow: unparsePermissionInteger(x.allow),
		deny: unparsePermissionInteger(x.deny),
	};
}
