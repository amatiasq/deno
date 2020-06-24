import { EmojiId, RoleId } from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure

export interface RawEmoji {
	/** emoji id */
	id?: EmojiId;
	/** emoji name (can be null only in reaction emoji objects) */
	name?: string;
	/** roles this emoji is whitelisted to */
	roles?: RoleId[];
	/** user that created this emoji */
	user?: RawUser;
	/** whether this emoji must be wrapped in colons */
	require_colons?: boolean;
	/** whether this emoji is managed */
	managed?: boolean;
	/** whether this emoji is animated */
	animated?: boolean;
	/** whether this emoji can be used, may be false due to loss of Server Boosts */
	available?: boolean;
}
