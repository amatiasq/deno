import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface RawInviteDeleteEvent {
	/** the channel of the invite */
	channel_id: ChannelId;
	/** the guild of the invite */
	guild_id?: GuildId;
	/** the unique invite code */
	code: string;
}
