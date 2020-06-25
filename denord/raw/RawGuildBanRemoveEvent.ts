import { GuildId } from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

export interface RawGuildBanRemoveEvent {
	/** id of the guild */
	guild_id: GuildId;
	/** the unbanned user */
	user: RawUser;
}
