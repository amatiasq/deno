import { RawGuildRoleDeleteEvent } from '../raw/RawGuildRoleDeleteEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId, RoleId } from '../internals/type-aliases.ts';

export interface GuildRoleDeleteEvent {
	/** id of the guild */
	guildId: GuildId;
	/** id of the role */
	roleId: RoleId;
}


export const wrapGuildRoleDeleteEvent = fromApiCasing as (x: RawGuildRoleDeleteEvent) => GuildRoleDeleteEvent;

export const unwrapGuildRoleDeleteEvent = toApiCasing as (x: GuildRoleDeleteEvent) => RawGuildRoleDeleteEvent;

export const wrapGuildRoleDeleteEventPartial = wrapGuildRoleDeleteEvent as (x: Partial<RawGuildRoleDeleteEvent>) => Partial<GuildRoleDeleteEvent>;

export const unwrapGuildRoleDeleteEventPartial = unwrapGuildRoleDeleteEvent as (x: Partial<GuildRoleDeleteEvent>) => Partial<RawGuildRoleDeleteEvent>;
