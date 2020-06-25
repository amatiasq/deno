import { RawGuildRoleCreateEvent } from '../raw/RawGuildRoleCreateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		role: wrapRole(x.role),
	};
}

export function unwrapGuildRoleCreateEvent(x: GuildRoleCreateEvent): RawGuildRoleCreateEvent {
	return {
		...toApiCasing(x),
		role: unwrapRole(x.role),
	};
}

export function wrapGuildRoleCreateEventPartial(x: Partial<RawGuildRoleCreateEvent>): Partial<GuildRoleCreateEvent> {
	return {
		...fromApiCasing(x),
		role: x.role && wrapRole(x.role),
	};
}

export function unwrapGuildRoleCreateEventPartial(x: Partial<GuildRoleCreateEvent>): Partial<RawGuildRoleCreateEvent> {
	return {
		...toApiCasing(x),
		role: x.role && unwrapRole(x.role),
	};
}
