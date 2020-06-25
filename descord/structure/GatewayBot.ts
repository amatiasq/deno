import { RawGatewayBot } from '../raw/RawGatewayBot.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GatewaySessionStartLimit, wrapGatewaySessionStartLimit, unwrapGatewaySessionStartLimit } from './GatewaySessionStartLimit.ts';

export interface GatewayBot {
	/** The WSS URL that can be used for connecting to the gateway. */
	url: string;
	/** The recommended number of shards to use when connecting. */
	shards: number;
	/** Info on the current start limit. */
	sessionStartLimit: GatewaySessionStartLimit;
}


export function wrapGatewayBot(x: RawGatewayBot): GatewayBot {
	return {
		...fromApiCasing(x),
		sessionStartLimit: wrapGatewaySessionStartLimit(x.session_start_limit),
	};
}

export function unwrapGatewayBot(x: GatewayBot): RawGatewayBot {
	return {
		...toApiCasing(x),
		session_start_limit: unwrapGatewaySessionStartLimit(x.sessionStartLimit),
	};
}

export function wrapGatewayBotPartial(x: Partial<RawGatewayBot>): Partial<GatewayBot> {
	return {
		...fromApiCasing(x),
		sessionStartLimit: x.session_start_limit && wrapGatewaySessionStartLimit(x.session_start_limit),
	};
}

export function unwrapGatewayBotPartial(x: Partial<GatewayBot>): Partial<RawGatewayBot> {
	return {
		...toApiCasing(x),
		session_start_limit: x.sessionStartLimit && unwrapGatewaySessionStartLimit(x.sessionStartLimit),
	};
}
