import { RawUpdateVoiceStateCommand } from '../raw/RawUpdateVoiceStateCommand.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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


export const wrapUpdateVoiceStateCommand = fromApiCasing as (x: RawUpdateVoiceStateCommand) => UpdateVoiceStateCommand;

export const unwrapUpdateVoiceStateCommand = toApiCasing as (x: UpdateVoiceStateCommand) => RawUpdateVoiceStateCommand;

export const wrapUpdateVoiceStateCommandPartial = wrapUpdateVoiceStateCommand as (x: Partial<RawUpdateVoiceStateCommand>) => Partial<UpdateVoiceStateCommand>;

export const unwrapUpdateVoiceStateCommandPartial = unwrapUpdateVoiceStateCommand as (x: Partial<UpdateVoiceStateCommand>) => Partial<RawUpdateVoiceStateCommand>;
