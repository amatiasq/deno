import { RawGetInviteParams } from '../raw/RawGetInviteParams.ts';

// https://discord.com/developers/docs/resources/invite#get-invite-get-invite-url-parameters

export interface GetInviteParams {
	/** whether the invite should contain approximate member counts */
	withCounts?: boolean;
}


export function wrapGetInviteParams(x: RawGetInviteParams): GetInviteParams {
	return {
		...x,
		withCounts: x.with_counts && x.with_counts,
	};
}

export function unwrapGetInviteParams(x: GetInviteParams): RawGetInviteParams {
	return {
		...x,
		with_counts: x.withCounts && x.withCounts,
	};
}

export const wrapGetInviteParamsPartial = wrapGetInviteParams as (x: Partial<RawGetInviteParams>) => Partial<GetInviteParams>;

export const unwrapGetInviteParamsPartial = unwrapGetInviteParams as (x: Partial<GetInviteParams>) => Partial<RawGetInviteParams>;
