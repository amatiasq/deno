import { ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#modify-current-user-json-params

export interface RawModifyCurrentUserPayload {
	/** user's username, if changed may cause the user's discriminator to be randomized. */
	username?: string;
	/** if passed, modifies the user's avatar */
	avatar?: ImageData;
}
