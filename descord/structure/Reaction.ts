import { RawReaction } from '../raw/RawReaction.ts';
import { integer } from '../internals/type-aliases.ts';
import { Emoji, wrapEmoji, unwrapEmoji } from './Emoji.ts';

// https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure

export interface Reaction {
	/** times this emoji has been used to react */
	count: integer;
	/** whether the current user reacted using this emoji */
	me: boolean;
	/** emoji information */
	emoji: Emoji;
}


export function wrapReaction(x: RawReaction): Reaction {
	return {
		...x,
		emoji: wrapEmoji(x.emoji),
	};
}

export function unwrapReaction(x: Reaction): RawReaction {
	return {
		...x,
		emoji: unwrapEmoji(x.emoji),
	};
}

export function wrapReactionPartial(x: Partial<RawReaction>): Partial<Reaction> {
	return {
		...x,
		emoji: x.emoji && wrapEmoji(x.emoji),
	};
}

export function unwrapReactionPartial(x: Partial<Reaction>): Partial<RawReaction> {
	return {
		...x,
		emoji: x.emoji && unwrapEmoji(x.emoji),
	};
}
