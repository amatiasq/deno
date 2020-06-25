import { RoleId, UserId } from '../internals/type-aliases.ts';
import { AllowedMentionType } from '../enum/AllowedMentionType.ts';

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure

export interface RawAllowedMentions {
	/** An array of allowed mention types to parse from the content. */
	parse: AllowedMentionType[];
	/** Array of role_ids to mention (Max size of 100) */
	roles: RoleId[];
	/** Array of user_ids to mention (Max size of 100) */
	users: UserId[];
}
