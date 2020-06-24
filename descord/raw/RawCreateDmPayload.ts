import { UserId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#create-dm-json-params

export interface RawCreateDmPayload {
	/** the recipient to open a DM channel with */
	recipient_id: UserId;
}
