import { integer } from '../internals/type-aliases.ts';

export interface RawResumeCommand {
	/** session token */
	token: string;
	/** session id */
	session_id: string;
	/** last sequence number received */
	seq: integer;
}
