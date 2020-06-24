import { RawRequestGuildMembersCommand } from '../raw/RawRequestGuildMembersCommand.ts';
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


export function wrapRequestGuildMembersCommand(x: RawRequestGuildMembersCommand): RequestGuildMembersCommand {
	return {
		...x,
		guildId: x.guild_id,
		userIds: x.user_ids && x.user_ids,
	};
}

export function unwrapRequestGuildMembersCommand(x: RequestGuildMembersCommand): RawRequestGuildMembersCommand {
	return {
		...x,
		guild_id: x.guildId,
		user_ids: x.userIds && x.userIds,
	};
}

export function wrapRequestGuildMembersCommandPartial(x: Partial<RawRequestGuildMembersCommand>): Partial<RequestGuildMembersCommand> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		userIds: x.user_ids && x.user_ids,
	};
}

export function unwrapRequestGuildMembersCommandPartial(x: Partial<RequestGuildMembersCommand>): Partial<RawRequestGuildMembersCommand> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		user_ids: x.userIds && x.userIds,
	};
}
