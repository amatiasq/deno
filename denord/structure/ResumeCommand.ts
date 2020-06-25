import { RawResumeCommand } from '../raw/RawResumeCommand.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer } from '../internals/type-aliases.ts';

export interface ResumeCommand {
	/** session token */
	token: string;
	/** session id */
	sessionId: string;
	/** last sequence number received */
	seq: integer;
}


export const wrapResumeCommand = fromApiCasing as (x: RawResumeCommand) => ResumeCommand;

export const unwrapResumeCommand = toApiCasing as (x: ResumeCommand) => RawResumeCommand;

export const wrapResumeCommandPartial = wrapResumeCommand as (x: Partial<RawResumeCommand>) => Partial<ResumeCommand>;

export const unwrapResumeCommandPartial = unwrapResumeCommand as (x: Partial<ResumeCommand>) => Partial<RawResumeCommand>;
