import { RoleId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#add-guild-member-json-params

export interface RawAddGuildMemberPayload {
	/** an oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild	 */
	access_token: string;
	/** value to set users nickname to (requires permission: MANAGE_NICKNAMES) */
	nick?: string;
	/** array of role ids the member is assigned   (requires permission: MANAGE_ROLES) */
	roles?: RoleId[];
	/** whether the user is muted in voice channel (requires permission: MUTE_MEMBERS) */
	mute?: boolean;
	/** whether the user is deafened in voice channels (requires permission: DEAFEN_MEMBERS) */
	deaf?: boolean;
}
