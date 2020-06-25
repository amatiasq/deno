import { RawBan } from '../raw/RawBan.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

// https://discord.com/developers/docs/resources/guild#ban-object-ban-structure

export interface Ban {
	/** the reason for the ban */
	reason?: string;
	/** the banned user */
	user: User;
}


export function wrapBan(x: RawBan): Ban {
	return {
		...x,
		user: wrapUser(x.user),
	};
}

export function unwrapBan(x: Ban): RawBan {
	return {
		...x,
		user: unwrapUser(x.user),
	};
}

export function wrapBanPartial(x: Partial<RawBan>): Partial<Ban> {
	return {
		...x,
		user: x.user && wrapUser(x.user),
	};
}

export function unwrapBanPartial(x: Partial<Ban>): Partial<RawBan> {
	return {
		...x,
		user: x.user && unwrapUser(x.user),
	};
}
