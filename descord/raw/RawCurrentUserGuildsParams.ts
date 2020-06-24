import { GuildId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params

export interface RawCurrentUserGuildsParams {
	/** get guilds before this guild ID DEFAULT: absent */
	before?: GuildId;
	/** get guilds after this guild ID DEFAULT: absent */
	after?: GuildId;
	/** max number of guilds to return (1-100) DEFAULT: 100 */
	limit?: integer;
}
