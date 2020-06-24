import { RawGuildRoleDeleteEvent } from '../raw/RawGuildRoleDeleteEvent.ts';
import { GuildId, RoleId } from '../internals/type-aliases.ts';

export interface GuildRoleDeleteEvent {
	/** id of the guild */
	guildId: GuildId;
	/** id of the role */
	roleId: RoleId;
}


export function wrapGuildRoleDeleteEvent(x: RawGuildRoleDeleteEvent): GuildRoleDeleteEvent {
	return {
		...x,
		guildId: x.guild_id,
		roleId: x.role_id,
	};
}

export function unwrapGuildRoleDeleteEvent(x: GuildRoleDeleteEvent): RawGuildRoleDeleteEvent {
	return {
		...x,
		guild_id: x.guildId,
		role_id: x.roleId,
	};
}

export function wrapGuildRoleDeleteEventPartial(x: Partial<RawGuildRoleDeleteEvent>): Partial<GuildRoleDeleteEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		roleId: x.role_id && x.role_id,
	};
}

export function unwrapGuildRoleDeleteEventPartial(x: Partial<GuildRoleDeleteEvent>): Partial<RawGuildRoleDeleteEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		role_id: x.roleId && x.roleId,
	};
}
