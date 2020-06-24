import { RawUpdateStatusCommand } from '../raw/RawUpdateStatusCommand.ts';
import { StatusType } from '../enum/StatusType.ts';
import { integer } from '../internals/type-aliases.ts';
import { Activity, wrapActivity, unwrapActivity } from './Activity.ts';

export interface UpdateStatusCommand {
	/** unix time (in milliseconds) of when the client went idle, or null if the client is not idle */
	since?: integer;
	/** null, or the user's new activity */
	game?: Activity;
	/** the user's new status */
	status: StatusType;
	/** whether or not the client is afk */
	afk: boolean;
}


export function wrapUpdateStatusCommand(x: RawUpdateStatusCommand): UpdateStatusCommand {
	return {
		...x,
		game: x.game && wrapActivity(x.game),
	};
}

export function unwrapUpdateStatusCommand(x: UpdateStatusCommand): RawUpdateStatusCommand {
	return {
		...x,
		game: x.game && unwrapActivity(x.game),
	};
}

export const wrapUpdateStatusCommandPartial = wrapUpdateStatusCommand as (x: Partial<RawUpdateStatusCommand>) => Partial<UpdateStatusCommand>;

export const unwrapUpdateStatusCommandPartial = unwrapUpdateStatusCommand as (x: Partial<UpdateStatusCommand>) => Partial<RawUpdateStatusCommand>;
