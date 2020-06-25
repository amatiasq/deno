import { RawGatewaySessionStartLimit } from '../raw/RawGatewaySessionStartLimit.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

export interface GatewaySessionStartLimit {
	/** The total number of session starts the current user is allowed. */
	total: number;
	/** The remaining number of session starts the current user is allowed. */
	remaining: number;
	/** Milliseconds left until limit is reset. */
	resetAfter: number;
}


export const wrapGatewaySessionStartLimit = fromApiCasing as (x: RawGatewaySessionStartLimit) => GatewaySessionStartLimit;

export const unwrapGatewaySessionStartLimit = toApiCasing as (x: GatewaySessionStartLimit) => RawGatewaySessionStartLimit;

export const wrapGatewaySessionStartLimitPartial = wrapGatewaySessionStartLimit as (x: Partial<RawGatewaySessionStartLimit>) => Partial<GatewaySessionStartLimit>;

export const unwrapGatewaySessionStartLimitPartial = unwrapGatewaySessionStartLimit as (x: Partial<GatewaySessionStartLimit>) => Partial<RawGatewaySessionStartLimit>;
