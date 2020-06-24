import { RawGuildRoleCreateEvent } from '../raw/RawGuildRoleCreateEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';
import { Role, wrapRole, unwrapRole } from './Role.ts';

export interface GuildRoleCreateEvent {
	/** the id of the guild */
	guildId: GuildId;
	/** the role created */
	role: Role;
}


export function wrapGuildRoleCreateEvent(x: RawGuildRoleCreateEvent): GuildRoleCreateEvent {
	return {
		...x,
		guildId: x.guild_id,
		role: wrapRole(x.role),
	};
}

export function unwrapGuildRoleCreateEvent(x: GuildRoleCreateEvent): RawGuildRoleCreateEvent {
	return {
		...x,
		guild_id: x.guildId,
		role: unwrapRole(x.role),
	};
}

export function wrapGuildRoleCreateEventPartial(x: Partial<RawGuildRoleCreateEvent>): Partial<GuildRoleCreateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		role: x.role && wrapRole(x.role),
	};
}

export function unwrapGuildRoleCreateEventPartial(x: Partial<GuildRoleCreateEvent>): Partial<RawGuildRoleCreateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		role: x.role && unwrapRole(x.role),
	};
}
