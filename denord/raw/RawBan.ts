import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/guild#ban-object-ban-structure

export interface RawBan {
	/** the reason for the ban */
	reason?: string;
	/** the banned user */
	user: RawUser;
}
