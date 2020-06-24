import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface RawUpdateVoiceStateCommand {
	/** id of the guild */
	guild_id: GuildId;
	/** id of the voice channel client wants to join (null if disconnecting) */
	channel_id?: ChannelId;
	/** is the client muted */
	self_mute: boolean;
	/** is the client deafened */
	self_deaf: boolean;
}
