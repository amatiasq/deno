import { PermissionInteger } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params

export interface RawEditChannelPermissionsPayload {
	/** "member" for a user or "role" for a role */
	type: 'member' | 'role';
	/** the bitwise value of all allowed permissions */
	allow: PermissionInteger;
	/** the bitwise value of all disallowed permissions */
	deny: PermissionInteger;
}
