import { UnixTimestamp } from '../internals/type-aliases.ts';

export interface RawActivityTimestamps {
	/** unix time (in milliseconds) of when the activity started */
	start?: UnixTimestamp;
	/** unix time (in milliseconds) of when the activity ends */
	end?: UnixTimestamp;
}
