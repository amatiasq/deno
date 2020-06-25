import { RawClientStatus } from '../raw/RawClientStatus.ts';


export interface ClientStatus {
	/** the user's status set for an active desktop (Windows, Linux, Mac) application session */
	desktop?: string;
	/** the user's status set for an active mobile (iOS, Android) application session */
	mobile?: string;
	/** the user's status set for an active web (browser, bot account) application session */
	web?: string;
}


export function wrapClientStatus(x: RawClientStatus): ClientStatus {
	return x;
}

export function unwrapClientStatus(x: ClientStatus): RawClientStatus {
	return x;
}

export const wrapClientStatusPartial = wrapClientStatus as (x: Partial<RawClientStatus>) => Partial<ClientStatus>;

export const unwrapClientStatusPartial = unwrapClientStatus as (x: Partial<ClientStatus>) => Partial<RawClientStatus>;
