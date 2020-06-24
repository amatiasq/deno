import { RawEmoji } from '../raw/RawEmoji.ts';
import { EmojiId, RoleId } from '../internals/type-aliases.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

// https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure

export interface Emoji {
	/** emoji id */
	id?: EmojiId;
	/** emoji name (can be null only in reaction emoji objects) */
	name?: string;
	/** roles this emoji is whitelisted to */
	roles?: RoleId[];
	/** user that created this emoji */
	user?: User;
	/** whether this emoji must be wrapped in colons */
	requireColons?: boolean;
	/** whether this emoji is managed */
	managed?: boolean;
	/** whether this emoji is animated */
	animated?: boolean;
	/** whether this emoji can be used, may be false due to loss of Server Boosts */
	available?: boolean;
}


export function wrapEmoji(x: RawEmoji): Emoji {
	return {
		...x,
		user: x.user && wrapUser(x.user),
		requireColons: x.require_colons && x.require_colons,
	};
}

export function unwrapEmoji(x: Emoji): RawEmoji {
	return {
		...x,
		user: x.user && unwrapUser(x.user),
		require_colons: x.requireColons && x.requireColons,
	};
}

export const wrapEmojiPartial = wrapEmoji as (x: Partial<RawEmoji>) => Partial<Emoji>;

export const unwrapEmojiPartial = unwrapEmoji as (x: Partial<Emoji>) => Partial<RawEmoji>;
