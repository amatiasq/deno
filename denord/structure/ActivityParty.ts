import { RawActivityParty } from '../raw/RawActivityParty.ts';
import { PartyId } from '../internals/type-aliases.ts';

export interface ActivityParty {
	/** the id of the party */
	id?: PartyId;
	/** used to show the party's current and maximum size. array of two integers (currentSize, maxSize) */
	size?: [number, number];
}


export function wrapActivityParty(x: RawActivityParty): ActivityParty {
	return x;
}

export function unwrapActivityParty(x: ActivityParty): RawActivityParty {
	return x;
}

export const wrapActivityPartyPartial = wrapActivityParty as (x: Partial<RawActivityParty>) => Partial<ActivityParty>;

export const unwrapActivityPartyPartial = unwrapActivityParty as (x: Partial<ActivityParty>) => Partial<RawActivityParty>;
