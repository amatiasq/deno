export interface RawGatewaySessionStartLimit {
	/** The total number of session starts the current user is allowed. */
	total: number;
	/** The remaining number of session starts the current user is allowed. */
	remaining: number;
	/** Milliseconds left until limit is reset. */
	reset_after: number;
}
