import { integer } from '../internals/type-aliases.ts';

export interface RawSessionStartLimit {
	/** The total number of session starts the current user is allowed */
	total: integer;
	/** The remaining number of session starts the current user is allowed */
	remaining: integer;
	/** The number of milliseconds after which the limit resets */
	reset_after: integer;
}
