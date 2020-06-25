import { RawCreateGroupDmPayload } from '../raw/RawCreateGroupDmPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

// https://discord.com/developers/docs/resources/user#create-group-dm-json-params

export interface CreateGroupDmPayload {
	/** access tokens of users that have granted your app the gdm.join scope */
	accessTokens: string[];
	/** a dictionary of user ids to their respective nicknames */
	nicks: { [id: string]: string };
}


export const wrapCreateGroupDmPayload = fromApiCasing as (x: RawCreateGroupDmPayload) => CreateGroupDmPayload;

export const unwrapCreateGroupDmPayload = toApiCasing as (x: CreateGroupDmPayload) => RawCreateGroupDmPayload;

export const wrapCreateGroupDmPayloadPartial = wrapCreateGroupDmPayload as (x: Partial<RawCreateGroupDmPayload>) => Partial<CreateGroupDmPayload>;

export const unwrapCreateGroupDmPayloadPartial = unwrapCreateGroupDmPayload as (x: Partial<CreateGroupDmPayload>) => Partial<RawCreateGroupDmPayload>;
