import { RawCreateGroupDmPayload } from '../raw/RawCreateGroupDmPayload.ts';

// https://discord.com/developers/docs/resources/user#create-group-dm-json-params

export interface CreateGroupDmPayload {
	/** access tokens of users that have granted your app the gdm.join scope */
	accessTokens: string[];
	/** a dictionary of user ids to their respective nicknames */
	nicks: { [id: string]: string };
}


export function wrapCreateGroupDmPayload(x: RawCreateGroupDmPayload): CreateGroupDmPayload {
	return {
		...x,
		accessTokens: x.access_tokens,
	};
}

export function unwrapCreateGroupDmPayload(x: CreateGroupDmPayload): RawCreateGroupDmPayload {
	return {
		...x,
		access_tokens: x.accessTokens,
	};
}

export function wrapCreateGroupDmPayloadPartial(x: Partial<RawCreateGroupDmPayload>): Partial<CreateGroupDmPayload> {
	return {
		...x,
		accessTokens: x.access_tokens && x.access_tokens,
	};
}

export function unwrapCreateGroupDmPayloadPartial(x: Partial<CreateGroupDmPayload>): Partial<RawCreateGroupDmPayload> {
	return {
		...x,
		access_tokens: x.accessTokens && x.accessTokens,
	};
}
