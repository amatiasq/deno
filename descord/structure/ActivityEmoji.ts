import { RawActivityEmoji } from '../raw/RawActivityEmoji.ts';
import { EmojiId } from '../internals/type-aliases.ts';

export interface ActivityEmoji {
	/** the name of the emoji */
	name: string;
	/** the id of the emoji */
	id?: EmojiId;
	/** whether this emoji is animated    */
	animated?: boolean;
}


export function wrapActivityEmoji(x: RawActivityEmoji): ActivityEmoji {
	return x;
}

export function unwrapActivityEmoji(x: ActivityEmoji): RawActivityEmoji {
	return x;
}

export const wrapActivityEmojiPartial = wrapActivityEmoji as (x: Partial<RawActivityEmoji>) => Partial<ActivityEmoji>;

export const unwrapActivityEmojiPartial = unwrapActivityEmoji as (x: Partial<ActivityEmoji>) => Partial<RawActivityEmoji>;
