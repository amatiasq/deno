import { RawGuildIntegrationsUpdateEvent } from '../raw/RawGuildIntegrationsUpdateEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';

export interface GuildIntegrationsUpdateEvent {
	/** id of the guild whose integrations were updated */
	guildId: GuildId;
}


export function wrapGuildIntegrationsUpdateEvent(x: RawGuildIntegrationsUpdateEvent): GuildIntegrationsUpdateEvent {
	return {
		...x,
		guildId: x.guild_id,
	};
}

export function unwrapGuildIntegrationsUpdateEvent(x: GuildIntegrationsUpdateEvent): RawGuildIntegrationsUpdateEvent {
	return {
		...x,
		guild_id: x.guildId,
	};
}

export function wrapGuildIntegrationsUpdateEventPartial(x: Partial<RawGuildIntegrationsUpdateEvent>): Partial<GuildIntegrationsUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapGuildIntegrationsUpdateEventPartial(x: Partial<GuildIntegrationsUpdateEvent>): Partial<RawGuildIntegrationsUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
	};
}
