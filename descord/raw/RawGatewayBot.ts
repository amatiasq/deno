import { RawGatewaySessionStartLimit } from './RawGatewaySessionStartLimit.ts';

export interface RawGatewayBot {
	/** The WSS URL that can be used for connecting to the gateway. */
	url: string;
	/** The recommended number of shards to use when connecting. */
	shards: number;
	/** Info on the current start limit. */
	session_start_limit: RawGatewaySessionStartLimit;
}
