import { integer } from '../internals/type-aliases.ts';

export interface RawHelloEvent {
	/** the interval (in milliseconds) the client should heartbeat with */
	heartbeat_interval: integer;
}
