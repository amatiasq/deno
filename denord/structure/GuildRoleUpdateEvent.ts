import { RawGuildRoleUpdateEvent } from '../raw/RawGuildRoleUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		role: wrapRole(x.role),
	};
}

export function unwrapGuildRoleUpdateEvent(x: GuildRoleUpdateEvent): RawGuildRoleUpdateEvent {
	return {
		...toApiCasing(x),
		role: unwrapRole(x.role),
	};
}

export function wrapGuildRoleUpdateEventPartial(x: Partial<RawGuildRoleUpdateEvent>): Partial<GuildRoleUpdateEvent> {
	return {
		...fromApiCasing(x),
		role: x.role && wrapRole(x.role),
	};
}

export function unwrapGuildRoleUpdateEventPartial(x: Partial<GuildRoleUpdateEvent>): Partial<RawGuildRoleUpdateEvent> {
	return {
		...toApiCasing(x),
		role: x.role && unwrapRole(x.role),
	};
}
