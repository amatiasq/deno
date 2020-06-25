import { ChannelId, GuildId } from '../internals/type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';

// https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure

export interface RawChannelMention {
	/** id of the channel */
	id: ChannelId;
	/** id of the guild containing the channel */
	guild_id: GuildId;
	/** the type of channel */
	type: ChannelType;
	/** the name of the channel */
	name: string;
}
