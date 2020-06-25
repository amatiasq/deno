import { RawGuildBanAddEvent } from '../raw/RawGuildBanAddEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		user: wrapUser(x.user),
	};
}

export function unwrapGuildBanAddEvent(x: GuildBanAddEvent): RawGuildBanAddEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
	};
}

export function wrapGuildBanAddEventPartial(x: Partial<RawGuildBanAddEvent>): Partial<GuildBanAddEvent> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapGuildBanAddEventPartial(x: Partial<GuildBanAddEvent>): Partial<RawGuildBanAddEvent> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
	};
}
