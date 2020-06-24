import { RawReadyEvent } from '../raw/RawReadyEvent.ts';
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
		...x,
		user: wrapUser(x.user),
		privateChannels: x.private_channels,
		guilds: x.guilds.map(wrapUnavailableGuild),
		sessionId: x.session_id,
	};
}

export function unwrapReadyEvent(x: ReadyEvent): RawReadyEvent {
	return {
		...x,
		user: unwrapUser(x.user),
		private_channels: x.privateChannels,
		guilds: x.guilds.map(unwrapUnavailableGuild),
		session_id: x.sessionId,
	};
}

export function wrapReadyEventPartial(x: Partial<RawReadyEvent>): Partial<ReadyEvent> {
	return {
		...x,
		user: x.user && wrapUser(x.user),
		privateChannels: x.private_channels && x.private_channels,
		guilds: x.guilds && x.guilds.map(wrapUnavailableGuild),
		sessionId: x.session_id && x.session_id,
	};
}

export function unwrapReadyEventPartial(x: Partial<ReadyEvent>): Partial<RawReadyEvent> {
	return {
		...x,
		user: x.user && unwrapUser(x.user),
		private_channels: x.privateChannels && x.privateChannels,
		guilds: x.guilds && x.guilds.map(unwrapUnavailableGuild),
		session_id: x.sessionId && x.sessionId,
	};
}
