import { RawModifyCurrentUserPayload } from '../raw/RawModifyCurrentUserPayload.ts';
import { ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#modify-current-user-json-params

export interface ModifyCurrentUserPayload {
	/** user's username, if changed may cause the user's discriminator to be randomized. */
	username?: string;
	/** if passed, modifies the user's avatar */
	avatar?: ImageData;
}


export function wrapModifyCurrentUserPayload(x: RawModifyCurrentUserPayload): ModifyCurrentUserPayload {
	return x;
}

export function unwrapModifyCurrentUserPayload(x: ModifyCurrentUserPayload): RawModifyCurrentUserPayload {
	return x;
}

export const wrapModifyCurrentUserPayloadPartial = wrapModifyCurrentUserPayload as (x: Partial<RawModifyCurrentUserPayload>) => Partial<ModifyCurrentUserPayload>;

export const unwrapModifyCurrentUserPayloadPartial = unwrapModifyCurrentUserPayload as (x: Partial<ModifyCurrentUserPayload>) => Partial<RawModifyCurrentUserPayload>;
