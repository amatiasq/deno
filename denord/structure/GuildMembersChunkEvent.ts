import { RawGuildMembersChunkEvent } from '../raw/RawGuildMembersChunkEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		members: x.members.map(wrapGuildMember),
		presences: x.presences && x.presences.map(wrapPresenceUpdateEvent),
	};
}

export function unwrapGuildMembersChunkEvent(x: GuildMembersChunkEvent): RawGuildMembersChunkEvent {
	return {
		...toApiCasing(x),
		members: x.members.map(unwrapGuildMember),
		presences: x.presences && x.presences.map(unwrapPresenceUpdateEvent),
	};
}

export function wrapGuildMembersChunkEventPartial(x: Partial<RawGuildMembersChunkEvent>): Partial<GuildMembersChunkEvent> {
	return {
		...fromApiCasing(x),
		members: x.members && x.members.map(wrapGuildMember),
		presences: x.presences && x.presences.map(wrapPresenceUpdateEvent),
	};
}

export function unwrapGuildMembersChunkEventPartial(x: Partial<GuildMembersChunkEvent>): Partial<RawGuildMembersChunkEvent> {
	return {
		...toApiCasing(x),
		members: x.members && x.members.map(unwrapGuildMember),
		presences: x.presences && x.presences.map(unwrapPresenceUpdateEvent),
	};
}
