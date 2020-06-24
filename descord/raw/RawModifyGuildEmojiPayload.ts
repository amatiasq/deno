import { RoleId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/emoji#modify-guild-emoji-json-params

export interface RawModifyGuildEmojiPayload {
	/** name of the emoji */
	name?: string;
	/** roles to which this emoji will be whitelisted */
	roles?: RoleId[];
}
