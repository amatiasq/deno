import { RawGuildRoleUpdateEvent } from '../raw/RawGuildRoleUpdateEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';
import { Role, wrapRole, unwrapRole } from './Role.ts';

export interface GuildRoleUpdateEvent {
	/** the id of the guild */
	guildId: GuildId;
	/** the role updated */
	role: Role;
}


export function wrapGuildRoleUpdateEvent(x: RawGuildRoleUpdateEvent): GuildRoleUpdateEvent {
	return {
		...x,
		guildId: x.guild_id,
		role: wrapRole(x.role),
	};
}

export function unwrapGuildRoleUpdateEvent(x: GuildRoleUpdateEvent): RawGuildRoleUpdateEvent {
	return {
		...x,
		guild_id: x.guildId,
		role: unwrapRole(x.role),
	};
}

export function wrapGuildRoleUpdateEventPartial(x: Partial<RawGuildRoleUpdateEvent>): Partial<GuildRoleUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		role: x.role && wrapRole(x.role),
	};
}

export function unwrapGuildRoleUpdateEventPartial(x: Partial<GuildRoleUpdateEvent>): Partial<RawGuildRoleUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		role: x.role && unwrapRole(x.role),
	};
}
