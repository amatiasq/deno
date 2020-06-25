import { RoleId, ChannelId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-member-json-params

export interface RawModifyGuildMemberPayload {
	/** value to set users nickname to (requires permission: MANAGE_NICKNAMES) */
	nick?: string;
	/** array of role ids the member is assigned   (requires permission: MANAGE_ROLES) */
	roles?: RoleId[];
	/** whether the user is muted in voice channels. Will throw a 400 if the user is not in a voice channe (requires permission: MUTE_MEMBERS) */
	mute?: boolean;
	/** whether the user is deafened in voice channels. Will throw a 400 if the user is not in a voice channel (requires permission: DEAFEN_MEMBERS) */
	deaf?: boolean;
	/** id of channel to move user to (if they are connected to voice) (requires permission: MOVE_MEMBERS) */
	channel_id?: ChannelId;
}
