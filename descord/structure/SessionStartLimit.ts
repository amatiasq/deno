import { RawSessionStartLimit } from '../raw/RawSessionStartLimit.ts';
import { integer } from '../internals/type-aliases.ts';

export interface SessionStartLimit {
	/** The total number of session starts the current user is allowed */
	total: integer;
	/** The remaining number of session starts the current user is allowed */
	remaining: integer;
	/** The number of milliseconds after which the limit resets */
	resetAfter: integer;
}


export function wrapSessionStartLimit(x: RawSessionStartLimit): SessionStartLimit {
	return {
		...x,
		resetAfter: x.reset_after,
	};
}

export function unwrapSessionStartLimit(x: SessionStartLimit): RawSessionStartLimit {
	return {
		...x,
		reset_after: x.resetAfter,
	};
}

export function wrapSessionStartLimitPartial(x: Partial<RawSessionStartLimit>): Partial<SessionStartLimit> {
	return {
		...x,
		resetAfter: x.reset_after && x.reset_after,
	};
}

export function unwrapSessionStartLimitPartial(x: Partial<SessionStartLimit>): Partial<RawSessionStartLimit> {
	return {
		...x,
		reset_after: x.resetAfter && x.resetAfter,
	};
}
