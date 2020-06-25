import { RawCreateDmPayload } from '../raw/RawCreateDmPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { UserId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#create-dm-json-params

export interface CreateDmPayload {
	/** the recipient to open a DM channel with */
	recipientId: UserId;
}


export const wrapCreateDmPayload = fromApiCasing as (x: RawCreateDmPayload) => CreateDmPayload;

export const unwrapCreateDmPayload = toApiCasing as (x: CreateDmPayload) => RawCreateDmPayload;

export const wrapCreateDmPayloadPartial = wrapCreateDmPayload as (x: Partial<RawCreateDmPayload>) => Partial<CreateDmPayload>;

export const unwrapCreateDmPayloadPartial = unwrapCreateDmPayload as (x: Partial<CreateDmPayload>) => Partial<RawCreateDmPayload>;
