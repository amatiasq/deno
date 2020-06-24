import { GuildId, integer, UserId } from '../internals/type-aliases.ts';

export interface RawRequestGuildMembersCommand {
	/** id of the guild(s) to get members for */
	guild_id: GuildId | GuildId[];
	/** string that username starts with, or an empty string to return all members */
	query?: string;
	/** maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members */
	limit: integer;
	/** used to specify if we want the presences of the matched members */
	presences?: boolean;
	/** used to specify which users you wish to fetch */
	user_ids?: UserId | UserId[];
	/** nonce to identify the Guild Members Chunk response */
	nonce?: string;
}
