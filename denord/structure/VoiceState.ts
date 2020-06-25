import { RawVoiceState } from '../raw/RawVoiceState.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId, ChannelId, UserId } from '../internals/type-aliases.ts';
import { GuildMember, wrapGuildMember, unwrapGuildMember } from './GuildMember.ts';

// https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure

export interface VoiceState {
	/** the guild id this voice state is for */
	guildId?: GuildId;
	/** the channel id this user is connected to */
	channelId: ChannelId;
	/** the user id this voice state is for */
	userId: UserId;
	/** the guild member this voice state is for */
	member?: GuildMember;
	/** the session id for this voice state */
	sessionId: string;
	/** whether this user is deafened by the server */
	deaf: boolean;
	/** whether this user is muted by the server */
	mute: boolean;
	/** whether this user is locally deafened */
	selfDeaf: boolean;
	/** whether this user is locally muted */
	selfMute: boolean;
	/** whether this user is streaming using "Go Live" */
	selfStream?: boolean;
	/** whether this user is muted by the current user */
	suppress: boolean;
}


export function wrapVoiceState(x: RawVoiceState): VoiceState {
	return {
		...fromApiCasing(x),
		member: x.member && wrapGuildMember(x.member),
	};
}

export function unwrapVoiceState(x: VoiceState): RawVoiceState {
	return {
		...toApiCasing(x),
		member: x.member && unwrapGuildMember(x.member),
	};
}

export const wrapVoiceStatePartial = wrapVoiceState as (x: Partial<RawVoiceState>) => Partial<VoiceState>;

export const unwrapVoiceStatePartial = unwrapVoiceState as (x: Partial<VoiceState>) => Partial<RawVoiceState>;
