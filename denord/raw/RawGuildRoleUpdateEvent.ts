import { GuildId } from '../internals/type-aliases.ts';
import { RawRole } from './RawRole.ts';

export interface RawGuildRoleUpdateEvent {
	/** the id of the guild */
	guild_id: GuildId;
	/** the role updated */
	role: RawRole;
}
