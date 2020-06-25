import { GuildId } from '../internals/type-aliases.ts';

export interface RawUnavailableGuild {
	id: GuildId;
	/** if missing the user was removed from the guild */
	unavailable?: true;
}
