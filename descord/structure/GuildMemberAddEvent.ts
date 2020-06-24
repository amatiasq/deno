import { RawGuildMemberAddEvent } from '../raw/RawGuildMemberAddEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';
import {
	GuildMember,
	wrapGuildMember,
	unwrapGuildMember,
} from './GuildMember.ts';

export interface GuildMemberAddEvent extends GuildMember {
	/** id of the guild */
	guildId: GuildId;
}

export function wrapGuildMemberAddEvent(
	x: RawGuildMemberAddEvent,
): GuildMemberAddEvent {
	return {
		...wrapGuildMember(x),
		guildId: x.guild_id,
	};
}

export function unwrapGuildMemberAddEvent(
	x: GuildMemberAddEvent,
): RawGuildMemberAddEvent {
	return {
		...unwrapGuildMember(x),
		guild_id: x.guildId,
	};
}
