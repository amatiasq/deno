import { RoleId, ISO8601Timestamp } from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure

export interface RawGuildMember {
	/** the user this guild member represents */
	user?: RawUser;
	/** this users guild nickname */
	nick?: string;
	/** array of role object ids */
	roles: RoleId[];
	/** when the user joined the guild */
	joined_at: ISO8601Timestamp;
	/** when the user started boosting the guild */
	premium_since?: ISO8601Timestamp;
	/** whether the user is deafened in voice channels */
	deaf: boolean;
	/** whether the user is muted in voice channels */
	mute: boolean;
}
