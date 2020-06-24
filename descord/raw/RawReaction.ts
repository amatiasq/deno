import { integer } from '../internals/type-aliases.ts';
import { RawEmoji } from './RawEmoji.ts';

// https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure

export interface RawReaction {
	/** times this emoji has been used to react */
	count: integer;
	/** whether the current user reacted using this emoji */
	me: boolean;
	/** emoji information */
	emoji: RawEmoji;
}
