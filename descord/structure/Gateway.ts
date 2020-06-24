import { RawGateway } from '../raw/RawGateway.ts';


export interface Gateway {
	/** The WSS URL that can be used for connecting to the gateway. */
	url: string;
}


export function wrapGateway(x: RawGateway): Gateway {
	return x;
}

export function unwrapGateway(x: Gateway): RawGateway {
	return x;
}

export const wrapGatewayPartial = wrapGateway as (x: Partial<RawGateway>) => Partial<Gateway>;

export const unwrapGatewayPartial = unwrapGateway as (x: Partial<Gateway>) => Partial<RawGateway>;
