import { RoleId, ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params

export interface RawCreateGuildEmojiPayload {
	/** name of the emoji */
	name: string;
	/** the 128x128 emoji image */
	image: ImageData;
	/** roles for which this emoji will be whitelisted */
	roles: RoleId[];
}
