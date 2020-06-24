import { RawAllowedMentions } from '../raw/RawAllowedMentions.ts';
import { RoleId, UserId } from '../internals/type-aliases.ts';
import { AllowedMentionType } from '../enum/AllowedMentionType.ts';

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure

export interface AllowedMentions {
	/** An array of allowed mention types to parse from the content. */
	parse: AllowedMentionType[];
	/** Array of roleIds to mention (Max size of 100) */
	roles: RoleId[];
	/** Array of userIds to mention (Max size of 100) */
	users: UserId[];
}


export function wrapAllowedMentions(x: RawAllowedMentions): AllowedMentions {
	return x;
}

export function unwrapAllowedMentions(x: AllowedMentions): RawAllowedMentions {
	return x;
}

export const wrapAllowedMentionsPartial = wrapAllowedMentions as (x: Partial<RawAllowedMentions>) => Partial<AllowedMentions>;

export const unwrapAllowedMentionsPartial = unwrapAllowedMentions as (x: Partial<AllowedMentions>) => Partial<RawAllowedMentions>;
