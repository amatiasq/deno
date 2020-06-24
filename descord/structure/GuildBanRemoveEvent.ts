import { RawGuildBanRemoveEvent } from '../raw/RawGuildBanRemoveEvent.ts';
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
		...x,
		guildId: x.guild_id,
		user: wrapUser(x.user),
	};
}

export function unwrapGuildBanRemoveEvent(x: GuildBanRemoveEvent): RawGuildBanRemoveEvent {
	return {
		...x,
		guild_id: x.guildId,
		user: unwrapUser(x.user),
	};
}

export function wrapGuildBanRemoveEventPartial(x: Partial<RawGuildBanRemoveEvent>): Partial<GuildBanRemoveEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapGuildBanRemoveEventPartial(x: Partial<GuildBanRemoveEvent>): Partial<RawGuildBanRemoveEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		user: x.user && unwrapUser(x.user),
	};
}
