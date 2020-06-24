import { RawActivityTimestamps } from '../raw/RawActivityTimestamps.ts';
import { parseUnixTimestamp, unparseUnixTimestamp } from '../internals/type-aliases.ts';

export interface ActivityTimestamps {
	/** unix time (in milliseconds) of when the activity started */
	start?: Date;
	/** unix time (in milliseconds) of when the activity ends */
	end?: Date;
}


export function wrapActivityTimestamps(x: RawActivityTimestamps): ActivityTimestamps {
	return {
		...x,
		start: x.start && parseUnixTimestamp(x.start),
		end: x.end && parseUnixTimestamp(x.end),
	};
}

export function unwrapActivityTimestamps(x: ActivityTimestamps): RawActivityTimestamps {
	return {
		...x,
		start: x.start && unparseUnixTimestamp(x.start),
		end: x.end && unparseUnixTimestamp(x.end),
	};
}

export const wrapActivityTimestampsPartial = wrapActivityTimestamps as (x: Partial<RawActivityTimestamps>) => Partial<ActivityTimestamps>;

export const unwrapActivityTimestampsPartial = unwrapActivityTimestamps as (x: Partial<ActivityTimestamps>) => Partial<RawActivityTimestamps>;
