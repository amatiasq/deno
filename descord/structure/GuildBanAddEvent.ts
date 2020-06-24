import { RawGuildBanAddEvent } from '../raw/RawGuildBanAddEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface GuildBanAddEvent {
	/** id of the guild */
	guildId: GuildId;
	/** the banned user */
	user: User;
}


export function wrapGuildBanAddEvent(x: RawGuildBanAddEvent): GuildBanAddEvent {
	return {
		...x,
		guildId: x.guild_id,
		user: wrapUser(x.user),
	};
}

export function unwrapGuildBanAddEvent(x: GuildBanAddEvent): RawGuildBanAddEvent {
	return {
		...x,
		guild_id: x.guildId,
		user: unwrapUser(x.user),
	};
}

export function wrapGuildBanAddEventPartial(x: Partial<RawGuildBanAddEvent>): Partial<GuildBanAddEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapGuildBanAddEventPartial(x: Partial<GuildBanAddEvent>): Partial<RawGuildBanAddEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		user: x.user && unwrapUser(x.user),
	};
}
