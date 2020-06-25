import { GuildId, integer, UserId } from '../internals/type-aliases.ts';
import { RawGuildMember } from './RawGuildMember.ts';
import { RawPresenceUpdateEvent } from './RawPresenceUpdateEvent.ts';

export interface RawGuildMembersChunkEvent {
	/** the id of the guild */
	guild_id: GuildId;
	/** set of guild members */
	members: RawGuildMember[];
	/** the chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count) */
	chunk_index: integer;
	/** the total number of expected chunks for this response */
	chunk_count: integer;
	/** if passing an invalid id to REQUEST_GUILD_MEMBERS, it will be returned here */
	not_found?: UserId[];
	/** if passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here */
	presences?: RawPresenceUpdateEvent[];
	/** the nonce used in the Guild Members Request */
	nonce?: string;
}
