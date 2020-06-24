import { RawCreateGuildRolePayload } from '../raw/RawCreateGuildRolePayload.ts';
import { integer, Permission, parsePermissionInteger, unparsePermissionInteger } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-role-json-params

export interface CreateGuildRolePayload {
	/** name of the role DEFAULT: "new role" */
	name?: string;
	/** bitwise value of the enabled/disabled permissions DEFAULT: @everyone permissions in guild */
	permissions?: Permission[];
	/** RGB color value DEFAULT: 0 */
	color?: integer;
	/** whether the role should be displayed separately in the sidebar DEFAULT: false */
	hoist?: boolean;
	/** whether the role should be mentionable DEFAULT: false */
	mentionable?: boolean;
}


export function wrapCreateGuildRolePayload(x: RawCreateGuildRolePayload): CreateGuildRolePayload {
	return {
		...x,
		permissions: x.permissions && parsePermissionInteger(x.permissions),
	};
}

export function unwrapCreateGuildRolePayload(x: CreateGuildRolePayload): RawCreateGuildRolePayload {
	return {
		...x,
		permissions: x.permissions && unparsePermissionInteger(x.permissions),
	};
}

export const wrapCreateGuildRolePayloadPartial = wrapCreateGuildRolePayload as (x: Partial<RawCreateGuildRolePayload>) => Partial<CreateGuildRolePayload>;

export const unwrapCreateGuildRolePayloadPartial = unwrapCreateGuildRolePayload as (x: Partial<CreateGuildRolePayload>) => Partial<RawCreateGuildRolePayload>;
