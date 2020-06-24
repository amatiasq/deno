import { GuildId } from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

export interface RawGuildBanAddEvent {
	/** id of the guild */
	guild_id: GuildId;
	/** the banned user */
	user: RawUser;
}
