import { RawAddGuildMemberPayload } from '../raw/RawAddGuildMemberPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { RoleId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#add-guild-member-json-params

export interface AddGuildMemberPayload {
	/** an oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild	 */
	accessToken: string;
	/** value to set users nickname to (requires permission: MANAGENICKNAMES) */
	nick?: string;
	/** array of role ids the member is assigned   (requires permission: MANAGEROLES) */
	roles?: RoleId[];
	/** whether the user is muted in voice channel (requires permission: MUTEMEMBERS) */
	mute?: boolean;
	/** whether the user is deafened in voice channels (requires permission: DEAFENMEMBERS) */
	deaf?: boolean;
}


export const wrapAddGuildMemberPayload = fromApiCasing as (x: RawAddGuildMemberPayload) => AddGuildMemberPayload;

export const unwrapAddGuildMemberPayload = toApiCasing as (x: AddGuildMemberPayload) => RawAddGuildMemberPayload;

export const wrapAddGuildMemberPayloadPartial = wrapAddGuildMemberPayload as (x: Partial<RawAddGuildMemberPayload>) => Partial<AddGuildMemberPayload>;

export const unwrapAddGuildMemberPayloadPartial = unwrapAddGuildMemberPayload as (x: Partial<AddGuildMemberPayload>) => Partial<RawAddGuildMemberPayload>;
