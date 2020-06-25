import { RawIdentifyConnection } from '../raw/RawIdentifyConnection.ts';


export interface IdentifyConnection {
	/** your operating system */
	$os?: string;
	/** your library name */
	$browser?: string;
	/** your library name */
	$device?: string;
}


export function wrapIdentifyConnection(x: RawIdentifyConnection): IdentifyConnection {
	return x;
}

export function unwrapIdentifyConnection(x: IdentifyConnection): RawIdentifyConnection {
	return x;
}

export const wrapIdentifyConnectionPartial = wrapIdentifyConnection as (x: Partial<RawIdentifyConnection>) => Partial<IdentifyConnection>;

export const unwrapIdentifyConnectionPartial = unwrapIdentifyConnection as (x: Partial<IdentifyConnection>) => Partial<RawIdentifyConnection>;
