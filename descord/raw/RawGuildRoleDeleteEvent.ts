import { GuildId, RoleId } from '../internals/type-aliases.ts';

export interface RawGuildRoleDeleteEvent {
	/** id of the guild */
	guild_id: GuildId;
	/** id of the role */
	role_id: RoleId;
}
