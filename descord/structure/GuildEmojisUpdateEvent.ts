import { RawGuildEmojisUpdateEvent } from '../raw/RawGuildEmojisUpdateEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';

export interface GuildEmojisUpdateEvent {
	/** id of the guild */
	guildId: GuildId;
	/** array of emojis */
	emojis: string[];
}


export function wrapGuildEmojisUpdateEvent(x: RawGuildEmojisUpdateEvent): GuildEmojisUpdateEvent {
	return {
		...x,
		guildId: x.guild_id,
	};
}

export function unwrapGuildEmojisUpdateEvent(x: GuildEmojisUpdateEvent): RawGuildEmojisUpdateEvent {
	return {
		...x,
		guild_id: x.guildId,
	};
}

export function wrapGuildEmojisUpdateEventPartial(x: Partial<RawGuildEmojisUpdateEvent>): Partial<GuildEmojisUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapGuildEmojisUpdateEventPartial(x: Partial<GuildEmojisUpdateEvent>): Partial<RawGuildEmojisUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
	};
}
