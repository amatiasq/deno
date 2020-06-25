import { RawRequestGuildMembersCommand } from '../raw/RawRequestGuildMembersCommand.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId, integer, UserId } from '../internals/type-aliases.ts';

export interface RequestGuildMembersCommand {
	/** id of the guild(s) to get members for */
	guildId: GuildId | GuildId[];
	/** string that username starts with, or an empty string to return all members */
	query?: string;
	/** maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members */
	limit: integer;
	/** used to specify if we want the presences of the matched members */
	presences?: boolean;
	/** used to specify which users you wish to fetch */
	userIds?: UserId | UserId[];
	/** nonce to identify the Guild Members Chunk response */
	nonce?: string;
}


export const wrapRequestGuildMembersCommand = fromApiCasing as (x: RawRequestGuildMembersCommand) => RequestGuildMembersCommand;

export const unwrapRequestGuildMembersCommand = toApiCasing as (x: RequestGuildMembersCommand) => RawRequestGuildMembersCommand;

export const wrapRequestGuildMembersCommandPartial = wrapRequestGuildMembersCommand as (x: Partial<RawRequestGuildMembersCommand>) => Partial<RequestGuildMembersCommand>;

export const unwrapRequestGuildMembersCommandPartial = unwrapRequestGuildMembersCommand as (x: Partial<RequestGuildMembersCommand>) => Partial<RawRequestGuildMembersCommand>;
