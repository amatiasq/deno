import { PartyId } from '../internals/type-aliases.ts';

export interface RawActivityParty {
	/** the id of the party */
	id?: PartyId;
	/** used to show the party's current and maximum size. array of two integers (current_size, max_size) */
	size?: [number, number];
}
