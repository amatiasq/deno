import { PermissionInteger, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-role-json-params

export interface RawModifyGuildRolePayload {
	/** name of the role */
	name?: string;
	/** bitwise value of the enabled/disabled permissions */
	permissions?: PermissionInteger;
	/** RGB color value */
	color?: integer;
	/** whether the role should be displayed separately in the sidebar */
	hoist?: boolean;
	/** whether the role should be mentionable */
	mentionable?: boolean;
}
