import { MessageId, ChannelId, GuildId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure

export interface RawMessageReference {
	/** id of the originating message */
	message_id?: MessageId;
	/** id of the originating message's channel */
	channel_id: ChannelId;
	/** id of the originating message's guild */
	guild_id?: GuildId;
}
