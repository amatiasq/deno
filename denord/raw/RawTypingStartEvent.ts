import {
	ChannelId,
	GuildId,
	UnixTimestamp,
	UserId,
} from '../internals/type-aliases.ts';
import { RawGuildMember } from './RawGuildMember.ts';

export interface RawTypingStartEvent {
	/** id of the channel */
	channel_id: ChannelId;
	/** id of the guild */
	guild_id?: GuildId;
	/** id of the user */
	user_id: UserId;
	/** unix time (in seconds) of when the user started typing */
	timestamp: UnixTimestamp;
	/** the member who started typing if this happened in a guild */
	member?: RawGuildMember;
}
