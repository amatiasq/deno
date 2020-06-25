import { RawGuildEmojisUpdateEvent } from '../raw/RawGuildEmojisUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId } from '../internals/type-aliases.ts';

export interface GuildEmojisUpdateEvent {
	/** id of the guild */
	guildId: GuildId;
	/** array of emojis */
	emojis: string[];
}


export const wrapGuildEmojisUpdateEvent = fromApiCasing as (x: RawGuildEmojisUpdateEvent) => GuildEmojisUpdateEvent;

export const unwrapGuildEmojisUpdateEvent = toApiCasing as (x: GuildEmojisUpdateEvent) => RawGuildEmojisUpdateEvent;

export const wrapGuildEmojisUpdateEventPartial = wrapGuildEmojisUpdateEvent as (x: Partial<RawGuildEmojisUpdateEvent>) => Partial<GuildEmojisUpdateEvent>;

export const unwrapGuildEmojisUpdateEventPartial = unwrapGuildEmojisUpdateEvent as (x: Partial<GuildEmojisUpdateEvent>) => Partial<RawGuildEmojisUpdateEvent>;
