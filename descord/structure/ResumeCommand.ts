import { RawResumeCommand } from '../raw/RawResumeCommand.ts';
import { integer } from '../internals/type-aliases.ts';

export interface ResumeCommand {
	/** session token */
	token: string;
	/** session id */
	sessionId: string;
	/** last sequence number received */
	seq: integer;
}


export function wrapResumeCommand(x: RawResumeCommand): ResumeCommand {
	return {
		...x,
		sessionId: x.session_id,
	};
}

export function unwrapResumeCommand(x: ResumeCommand): RawResumeCommand {
	return {
		...x,
		session_id: x.sessionId,
	};
}

export function wrapResumeCommandPartial(x: Partial<RawResumeCommand>): Partial<ResumeCommand> {
	return {
		...x,
		sessionId: x.session_id && x.session_id,
	};
}

export function unwrapResumeCommandPartial(x: Partial<ResumeCommand>): Partial<RawResumeCommand> {
	return {
		...x,
		session_id: x.sessionId && x.sessionId,
	};
}
