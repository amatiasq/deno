import { RawVoiceState } from '../raw/RawVoiceState.ts';
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
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id,
		userId: x.user_id,
		member: x.member && wrapGuildMember(x.member),
		sessionId: x.session_id,
		selfDeaf: x.self_deaf,
		selfMute: x.self_mute,
		selfStream: x.self_stream && x.self_stream,
	};
}

export function unwrapVoiceState(x: VoiceState): RawVoiceState {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId,
		user_id: x.userId,
		member: x.member && unwrapGuildMember(x.member),
		session_id: x.sessionId,
		self_deaf: x.selfDeaf,
		self_mute: x.selfMute,
		self_stream: x.selfStream && x.selfStream,
	};
}

export function wrapVoiceStatePartial(x: Partial<RawVoiceState>): Partial<VoiceState> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id && x.channel_id,
		userId: x.user_id && x.user_id,
		member: x.member && wrapGuildMember(x.member),
		sessionId: x.session_id && x.session_id,
		selfDeaf: x.self_deaf && x.self_deaf,
		selfMute: x.self_mute && x.self_mute,
		selfStream: x.self_stream && x.self_stream,
	};
}

export function unwrapVoiceStatePartial(x: Partial<VoiceState>): Partial<RawVoiceState> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId && x.channelId,
		user_id: x.userId && x.userId,
		member: x.member && unwrapGuildMember(x.member),
		session_id: x.sessionId && x.sessionId,
		self_deaf: x.selfDeaf && x.selfDeaf,
		self_mute: x.selfMute && x.selfMute,
		self_stream: x.selfStream && x.selfStream,
	};
}
