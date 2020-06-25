import { RawGuildBanRemoveEvent } from '../raw/RawGuildBanRemoveEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId } from '../internals/type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface GuildBanRemoveEvent {
	/** id of the guild */
	guildId: GuildId;
	/** the unbanned user */
	user: User;
}


export function wrapGuildBanRemoveEvent(x: RawGuildBanRemoveEvent): GuildBanRemoveEvent {
	return {
		...fromApiCasing(x),
		user: wrapUser(x.user),
	};
}

export function unwrapGuildBanRemoveEvent(x: GuildBanRemoveEvent): RawGuildBanRemoveEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
	};
}

export function wrapGuildBanRemoveEventPartial(x: Partial<RawGuildBanRemoveEvent>): Partial<GuildBanRemoveEvent> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapGuildBanRemoveEventPartial(x: Partial<GuildBanRemoveEvent>): Partial<RawGuildBanRemoveEvent> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
	};
}
