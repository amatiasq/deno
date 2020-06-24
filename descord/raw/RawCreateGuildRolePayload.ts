import { integer, PermissionInteger } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-role-json-params

export interface RawCreateGuildRolePayload {
	/** name of the role DEFAULT: "new role" */
	name?: string;
	/** bitwise value of the enabled/disabled permissions DEFAULT: @everyone permissions in guild */
	permissions?: PermissionInteger;
	/** RGB color value DEFAULT: 0 */
	color?: integer;
	/** whether the role should be displayed separately in the sidebar DEFAULT: false */
	hoist?: boolean;
	/** whether the role should be mentionable DEFAULT: false */
	mentionable?: boolean;
}
