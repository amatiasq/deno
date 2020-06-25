import { GuildId } from '../internals/type-aliases.ts';

export interface RawGuildEmojisUpdateEvent {
	/** id of the guild */
	guild_id: GuildId;
	/** array of emojis */
	emojis: string[];
}
