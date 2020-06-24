import { RawHelloEvent } from '../raw/RawHelloEvent.ts';
import { integer } from '../internals/type-aliases.ts';

export interface HelloEvent {
	/** the interval (in milliseconds) the client should heartbeat with */
	heartbeatInterval: integer;
}


export function wrapHelloEvent(x: RawHelloEvent): HelloEvent {
	return {
		...x,
		heartbeatInterval: x.heartbeat_interval,
	};
}

export function unwrapHelloEvent(x: HelloEvent): RawHelloEvent {
	return {
		...x,
		heartbeat_interval: x.heartbeatInterval,
	};
}

export function wrapHelloEventPartial(x: Partial<RawHelloEvent>): Partial<HelloEvent> {
	return {
		...x,
		heartbeatInterval: x.heartbeat_interval && x.heartbeat_interval,
	};
}

export function unwrapHelloEventPartial(x: Partial<HelloEvent>): Partial<RawHelloEvent> {
	return {
		...x,
		heartbeat_interval: x.heartbeatInterval && x.heartbeatInterval,
	};
}
