import { RawGatewayUrlParams } from '../raw/RawGatewayUrlParams.ts';
import { integer } from '../internals/type-aliases.ts';

export interface GatewayUrlParams {
	/** Gateway Version to use */
	v: integer;
	/** The encoding of received gateway packets */
	encoding: string;
	/** The (optional) compression of gateway packets */
	compress?: string;
}


export function wrapGatewayUrlParams(x: RawGatewayUrlParams): GatewayUrlParams {
	return x;
}

export function unwrapGatewayUrlParams(x: GatewayUrlParams): RawGatewayUrlParams {
	return x;
}

export const wrapGatewayUrlParamsPartial = wrapGatewayUrlParams as (x: Partial<RawGatewayUrlParams>) => Partial<GatewayUrlParams>;

export const unwrapGatewayUrlParamsPartial = unwrapGatewayUrlParams as (x: Partial<GatewayUrlParams>) => Partial<RawGatewayUrlParams>;
