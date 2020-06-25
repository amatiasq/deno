import { RawReadyEvent } from '../raw/RawReadyEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer } from '../internals/type-aliases.ts';
import { UnavailableGuild, wrapUnavailableGuild, unwrapUnavailableGuild } from './UnavailableGuild.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface ReadyEvent {
	/** gateway version */
	v: integer;
	/** information about the user including email */
	user: User;
	/** empty array */
	privateChannels: [];
	/** the guilds the user is in */
	guilds: UnavailableGuild[];
	/** used for resuming connections */
	sessionId: string;
	/** the shard information associated with this session, if sent when identifying */
	shard?: [integer, integer];
}


export function wrapReadyEvent(x: RawReadyEvent): ReadyEvent {
	return {
		...fromApiCasing(x),
		user: wrapUser(x.user),
		guilds: x.guilds.map(wrapUnavailableGuild),
	};
}

export function unwrapReadyEvent(x: ReadyEvent): RawReadyEvent {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
		guilds: x.guilds.map(unwrapUnavailableGuild),
	};
}

export function wrapReadyEventPartial(x: Partial<RawReadyEvent>): Partial<ReadyEvent> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
		guilds: x.guilds && x.guilds.map(wrapUnavailableGuild),
	};
}

export function unwrapReadyEventPartial(x: Partial<ReadyEvent>): Partial<RawReadyEvent> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
		guilds: x.guilds && x.guilds.map(unwrapUnavailableGuild),
	};
}
