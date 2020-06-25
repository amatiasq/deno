import { RawGuildIntegrationsUpdateEvent } from '../raw/RawGuildIntegrationsUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId } from '../internals/type-aliases.ts';

export interface GuildIntegrationsUpdateEvent {
	/** id of the guild whose integrations were updated */
	guildId: GuildId;
}


export const wrapGuildIntegrationsUpdateEvent = fromApiCasing as (x: RawGuildIntegrationsUpdateEvent) => GuildIntegrationsUpdateEvent;

export const unwrapGuildIntegrationsUpdateEvent = toApiCasing as (x: GuildIntegrationsUpdateEvent) => RawGuildIntegrationsUpdateEvent;

export const wrapGuildIntegrationsUpdateEventPartial = wrapGuildIntegrationsUpdateEvent as (x: Partial<RawGuildIntegrationsUpdateEvent>) => Partial<GuildIntegrationsUpdateEvent>;

export const unwrapGuildIntegrationsUpdateEventPartial = unwrapGuildIntegrationsUpdateEvent as (x: Partial<GuildIntegrationsUpdateEvent>) => Partial<RawGuildIntegrationsUpdateEvent>;
