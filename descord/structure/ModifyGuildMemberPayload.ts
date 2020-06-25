import { RawModifyGuildMemberPayload } from '../raw/RawModifyGuildMemberPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { RoleId, ChannelId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-member-json-params

export interface ModifyGuildMemberPayload {
	/** value to set users nickname to (requires permission: MANAGENICKNAMES) */
	nick?: string;
	/** array of role ids the member is assigned   (requires permission: MANAGEROLES) */
	roles?: RoleId[];
	/** whether the user is muted in voice channels. Will throw a 400 if the user is not in a voice channe (requires permission: MUTEMEMBERS) */
	mute?: boolean;
	/** whether the user is deafened in voice channels. Will throw a 400 if the user is not in a voice channel (requires permission: DEAFENMEMBERS) */
	deaf?: boolean;
	/** id of channel to move user to (if they are connected to voice) (requires permission: MOVEMEMBERS) */
	channelId?: ChannelId;
}


export const wrapModifyGuildMemberPayload = fromApiCasing as (x: RawModifyGuildMemberPayload) => ModifyGuildMemberPayload;

export const unwrapModifyGuildMemberPayload = toApiCasing as (x: ModifyGuildMemberPayload) => RawModifyGuildMemberPayload;

export const wrapModifyGuildMemberPayloadPartial = wrapModifyGuildMemberPayload as (x: Partial<RawModifyGuildMemberPayload>) => Partial<ModifyGuildMemberPayload>;

export const unwrapModifyGuildMemberPayloadPartial = unwrapModifyGuildMemberPayload as (x: Partial<ModifyGuildMemberPayload>) => Partial<RawModifyGuildMemberPayload>;
