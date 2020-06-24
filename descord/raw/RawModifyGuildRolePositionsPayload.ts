import { RoleId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-json-params

export interface RawModifyGuildRolePositionsPayload {
	/** role */
	id: RoleId;
	/** sorting position of the role */
	position?: integer;
}
