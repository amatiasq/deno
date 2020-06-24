import { GuildId } from '../internals/type-aliases.ts';

export interface RawGuildIntegrationsUpdateEvent {
	/** id of the guild whose integrations were updated */
	guild_id: GuildId;
}
