import {
	GuildId,
	ISO8601Timestamp,
	RoleId,
} from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

export interface RawGuildMemberUpdateEvent {
	/** the id of the guild */
	guild_id: GuildId;
	/** user role ids */
	roles: RoleId[];
	/** the user */
	user: RawUser;
	/** nickname of the user in the guild */
	nick?: string;
	/** when the user starting boosting the guild */
	premium_since?: ISO8601Timestamp;
}
