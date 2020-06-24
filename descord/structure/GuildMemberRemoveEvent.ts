import { RawGuildMemberRemoveEvent } from '../raw/RawGuildMemberRemoveEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface GuildMemberRemoveEvent {
	/** the id of the guild */
	guildId: GuildId;
	/** the user who was removed */
	user: User;
}


export function wrapGuildMemberRemoveEvent(x: RawGuildMemberRemoveEvent): GuildMemberRemoveEvent {
	return {
		...x,
		guildId: x.guild_id,
		user: wrapUser(x.user),
	};
}

export function unwrapGuildMemberRemoveEvent(x: GuildMemberRemoveEvent): RawGuildMemberRemoveEvent {
	return {
		...x,
		guild_id: x.guildId,
		user: unwrapUser(x.user),
	};
}

export function wrapGuildMemberRemoveEventPartial(x: Partial<RawGuildMemberRemoveEvent>): Partial<GuildMemberRemoveEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapGuildMemberRemoveEventPartial(x: Partial<GuildMemberRemoveEvent>): Partial<RawGuildMemberRemoveEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
		user: x.user && unwrapUser(x.user),
	};
}
