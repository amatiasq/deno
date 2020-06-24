import { RawGatewaySessionStartLimit } from '../raw/RawGatewaySessionStartLimit.ts';


export interface GatewaySessionStartLimit {
	/** The total number of session starts the current user is allowed. */
	total: number;
	/** The remaining number of session starts the current user is allowed. */
	remaining: number;
	/** Milliseconds left until limit is reset. */
	resetAfter: number;
}


export function wrapGatewaySessionStartLimit(x: RawGatewaySessionStartLimit): GatewaySessionStartLimit {
	return {
		...x,
		resetAfter: x.reset_after,
	};
}

export function unwrapGatewaySessionStartLimit(x: GatewaySessionStartLimit): RawGatewaySessionStartLimit {
	return {
		...x,
		reset_after: x.resetAfter,
	};
}

export function wrapGatewaySessionStartLimitPartial(x: Partial<RawGatewaySessionStartLimit>): Partial<GatewaySessionStartLimit> {
	return {
		...x,
		resetAfter: x.reset_after && x.reset_after,
	};
}

export function unwrapGatewaySessionStartLimitPartial(x: Partial<GatewaySessionStartLimit>): Partial<RawGatewaySessionStartLimit> {
	return {
		...x,
		reset_after: x.resetAfter && x.resetAfter,
	};
}
