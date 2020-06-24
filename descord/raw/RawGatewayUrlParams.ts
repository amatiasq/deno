import { integer } from '../internals/type-aliases.ts';

export interface RawGatewayUrlParams {
	/** Gateway Version to use */
	v: integer;
	/** The encoding of received gateway packets */
	encoding: string;
	/** The (optional) compression of gateway packets */
	compress?: string;
}
