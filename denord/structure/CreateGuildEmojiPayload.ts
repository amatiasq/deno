import { RawCreateGuildEmojiPayload } from '../raw/RawCreateGuildEmojiPayload.ts';
import { RoleId, ImageData } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params

export interface CreateGuildEmojiPayload {
	/** name of the emoji */
	name: string;
	/** the 128x128 emoji image */
	image: ImageData;
	/** roles for which this emoji will be whitelisted */
	roles: RoleId[];
}


export function wrapCreateGuildEmojiPayload(x: RawCreateGuildEmojiPayload): CreateGuildEmojiPayload {
	return x;
}

export function unwrapCreateGuildEmojiPayload(x: CreateGuildEmojiPayload): RawCreateGuildEmojiPayload {
	return x;
}

export const wrapCreateGuildEmojiPayloadPartial = wrapCreateGuildEmojiPayload as (x: Partial<RawCreateGuildEmojiPayload>) => Partial<CreateGuildEmojiPayload>;

export const unwrapCreateGuildEmojiPayloadPartial = unwrapCreateGuildEmojiPayload as (x: Partial<CreateGuildEmojiPayload>) => Partial<RawCreateGuildEmojiPayload>;
