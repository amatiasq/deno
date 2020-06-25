import { GuildId } from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

export interface RawGuildMemberRemoveEvent {
	/** the id of the guild */
	guild_id: GuildId;
	/** the user who was removed */
	user: RawUser;
}
