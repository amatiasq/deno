import { RawGuildMembersChunkEvent } from '../raw/RawGuildMembersChunkEvent.ts';
import { GuildId, integer, UserId } from '../internals/type-aliases.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';
import { PresenceUpdateEvent, wrapPresenceUpdateEvent, unwrapPresenceUpdateEvent } from './PresenceUpdateEvent.ts';

export interface GuildMembersChunkEvent {
	/** the id of the guild */
	guildId: GuildId;
	/** set of guild members */
	members: GuildMember[];
	/** the chunk index in the expected chunks for this response (0 <= chunkIndex < chunkCount) */
	chunkIndex: integer;
	/** the total number of expected chunks for this response */
	chunkCount: integer;
	/** if passing an invalid id to REQUESTGUILDMEMBERS, it will be returned here */
	notFound?: UserId[];
	/** if passing true to REQUESTGUILDMEMBERS, presences of the returned members will be here */
	presences?: PresenceUpdateEvent[];
	/** the nonce used in the Guild Members Request */
	nonce?: string;
}


export function wrapGuildMembersChunkEvent(x: RawGuildMembersChunkEvent): GuildMembersChunkEvent {
	return {
		...x,
		guildId: x.guild_id,
		members: x.members.map(wrapGuildMember),
		chunkIndex: x.chunk_index,
		chunkCount: x.chunk_count,
		notFound: x.not_found && x.not_found,
		presences: x.presences && x.presences.map(wrapPresenceUpdateEvent),
	};
}

export function unwrapGuildMembersChunkEvent(x: GuildMembersChunkEvent): RawGuildMembersChunkEvent {
	return {
		...x,
		guild_id: x.guildId,
		members: x.members.map(unwrapGuildMember),
		chunk_index: x.chunkIndex,
		chunk_count: x.chunkCount,
		not_found: x.notFound && x.notFound,
		presences: x.presences && x.presences.map(unwrapPresenceUpdateEvent),
	};
}

export function wrapGuildMembersChunkEventPartial(x: Partial<RawGuildMembersChunkEvent>): Partial<GuildMembersChunkEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		members: x.members && x.members.map(wrapGuildMember),
		chunkIndex: x.chunk_index && x.chunk_index,
		chunkCount: x.chunk_count && x.chunk_count,
		notFound: x.not_found && x.not_found,
		presences: x.presences && x.presences.map(wrapPresenceUpdateEvent),
	};
}

export function unwrapGuildMembersChunkEventPartial(x: Partial<GuildMembersChunkEvent>): Partial<RawGuildMembersChunkEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		members: x.members && x.members.map(unwrapGuildMember),
		chunk_index: x.chunkIndex && x.chunkIndex,
		chunk_count: x.chunkCount && x.chunkCount,
		not_found: x.notFound && x.notFound,
		presences: x.presences && x.presences.map(unwrapPresenceUpdateEvent),
	};
}
