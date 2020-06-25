import { RawGetInviteParams } from '../raw/RawGetInviteParams.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

// https://discord.com/developers/docs/resources/invite#get-invite-get-invite-url-parameters

export interface GetInviteParams {
	/** whether the invite should contain approximate member counts */
	withCounts?: boolean;
}


export const wrapGetInviteParams = fromApiCasing as (x: RawGetInviteParams) => GetInviteParams;

export const unwrapGetInviteParams = toApiCasing as (x: GetInviteParams) => RawGetInviteParams;

export const wrapGetInviteParamsPartial = wrapGetInviteParams as (x: Partial<RawGetInviteParams>) => Partial<GetInviteParams>;

export const unwrapGetInviteParamsPartial = unwrapGetInviteParams as (x: Partial<GetInviteParams>) => Partial<RawGetInviteParams>;
