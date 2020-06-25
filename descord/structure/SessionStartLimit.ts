import { RawSessionStartLimit } from '../raw/RawSessionStartLimit.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer } from '../internals/type-aliases.ts';

export interface SessionStartLimit {
	/** The total number of session starts the current user is allowed */
	total: integer;
	/** The remaining number of session starts the current user is allowed */
	remaining: integer;
	/** The number of milliseconds after which the limit resets */
	resetAfter: integer;
}


export const wrapSessionStartLimit = fromApiCasing as (x: RawSessionStartLimit) => SessionStartLimit;

export const unwrapSessionStartLimit = toApiCasing as (x: SessionStartLimit) => RawSessionStartLimit;

export const wrapSessionStartLimitPartial = wrapSessionStartLimit as (x: Partial<RawSessionStartLimit>) => Partial<SessionStartLimit>;

export const unwrapSessionStartLimitPartial = unwrapSessionStartLimit as (x: Partial<SessionStartLimit>) => Partial<RawSessionStartLimit>;
