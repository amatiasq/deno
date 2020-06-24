import { StatusType } from '../enum/StatusType.ts';
import { integer } from '../internals/type-aliases.ts';
import { RawActivity } from './RawActivity.ts';

export interface RawUpdateStatusCommand {
	/** unix time (in milliseconds) of when the client went idle, or null if the client is not idle */
	since?: integer;
	/** null, or the user's new activity */
	game?: RawActivity;
	/** the user's new status */
	status: StatusType;
	/** whether or not the client is afk */
	afk: boolean;
}
