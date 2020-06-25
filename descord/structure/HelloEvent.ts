import { RawHelloEvent } from '../raw/RawHelloEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer } from '../internals/type-aliases.ts';

export interface HelloEvent {
	/** the interval (in milliseconds) the client should heartbeat with */
	heartbeatInterval: integer;
}


export const wrapHelloEvent = fromApiCasing as (x: RawHelloEvent) => HelloEvent;

export const unwrapHelloEvent = toApiCasing as (x: HelloEvent) => RawHelloEvent;

export const wrapHelloEventPartial = wrapHelloEvent as (x: Partial<RawHelloEvent>) => Partial<HelloEvent>;

export const unwrapHelloEventPartial = unwrapHelloEvent as (x: Partial<HelloEvent>) => Partial<RawHelloEvent>;
