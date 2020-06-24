import { RawCurrentUserGuildsParams } from '../raw/RawCurrentUserGuildsParams.ts';
import { GuildId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params

export interface CurrentUserGuildsParams {
	/** get guilds before this guild ID DEFAULT: absent */
	before?: GuildId;
	/** get guilds after this guild ID DEFAULT: absent */
	after?: GuildId;
	/** max number of guilds to return (1-100) DEFAULT: 100 */
	limit?: integer;
}


export function wrapCurrentUserGuildsParams(x: RawCurrentUserGuildsParams): CurrentUserGuildsParams {
	return x;
}

export function unwrapCurrentUserGuildsParams(x: CurrentUserGuildsParams): RawCurrentUserGuildsParams {
	return x;
}

export const wrapCurrentUserGuildsParamsPartial = wrapCurrentUserGuildsParams as (x: Partial<RawCurrentUserGuildsParams>) => Partial<CurrentUserGuildsParams>;

export const unwrapCurrentUserGuildsParamsPartial = unwrapCurrentUserGuildsParams as (x: Partial<CurrentUserGuildsParams>) => Partial<RawCurrentUserGuildsParams>;
