import { RawGuildMemberRemoveEvent } from '../raw/RawGuildMemberRemoveEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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
		...fromApiCasing(x),
		user: wrapUser(x.user),
	};
}

export function unwrapGuildMemberRemoveEvent(x: GuildMemberRemoveEvent): RawGuildMemberRemoveEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
	};
}

export function wrapGuildMemberRemoveEventPartial(x: Partial<RawGuildMemberRemoveEvent>): Partial<GuildMemberRemoveEvent> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapGuildMemberRemoveEventPartial(x: Partial<GuildMemberRemoveEvent>): Partial<RawGuildMemberRemoveEvent> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
	};
}
