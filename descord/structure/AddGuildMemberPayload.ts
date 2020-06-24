import { RawAddGuildMemberPayload } from '../raw/RawAddGuildMemberPayload.ts';
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


export function wrapAddGuildMemberPayload(x: RawAddGuildMemberPayload): AddGuildMemberPayload {
	return {
		...x,
		accessToken: x.access_token,
	};
}

export function unwrapAddGuildMemberPayload(x: AddGuildMemberPayload): RawAddGuildMemberPayload {
	return {
		...x,
		access_token: x.accessToken,
	};
}

export function wrapAddGuildMemberPayloadPartial(x: Partial<RawAddGuildMemberPayload>): Partial<AddGuildMemberPayload> {
	return {
		...x,
		accessToken: x.access_token && x.access_token,
	};
}

export function unwrapAddGuildMemberPayloadPartial(x: Partial<AddGuildMemberPayload>): Partial<RawAddGuildMemberPayload> {
	return {
		...x,
		access_token: x.accessToken && x.accessToken,
	};
}
