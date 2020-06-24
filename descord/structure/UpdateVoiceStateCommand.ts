import { RawUpdateVoiceStateCommand } from '../raw/RawUpdateVoiceStateCommand.ts';
import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface UpdateVoiceStateCommand {
	/** id of the guild */
	guildId: GuildId;
	/** id of the voice channel client wants to join (null if disconnecting) */
	channelId?: ChannelId;
	/** is the client muted */
	selfMute: boolean;
	/** is the client deafened */
	selfDeaf: boolean;
}


export function wrapUpdateVoiceStateCommand(x: RawUpdateVoiceStateCommand): UpdateVoiceStateCommand {
	return {
		...x,
		guildId: x.guild_id,
		channelId: x.channel_id && x.channel_id,
		selfMute: x.self_mute,
		selfDeaf: x.self_deaf,
	};
}

export function unwrapUpdateVoiceStateCommand(x: UpdateVoiceStateCommand): RawUpdateVoiceStateCommand {
	return {
		...x,
		guild_id: x.guildId,
		channel_id: x.channelId && x.channelId,
		self_mute: x.selfMute,
		self_deaf: x.selfDeaf,
	};
}

export function wrapUpdateVoiceStateCommandPartial(x: Partial<RawUpdateVoiceStateCommand>): Partial<UpdateVoiceStateCommand> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		channelId: x.channel_id && x.channel_id,
		selfMute: x.self_mute && x.self_mute,
		selfDeaf: x.self_deaf && x.self_deaf,
	};
}

export function unwrapUpdateVoiceStateCommandPartial(x: Partial<UpdateVoiceStateCommand>): Partial<RawUpdateVoiceStateCommand> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		channel_id: x.channelId && x.channelId,
		self_mute: x.selfMute && x.selfMute,
		self_deaf: x.selfDeaf && x.selfDeaf,
	};
}
