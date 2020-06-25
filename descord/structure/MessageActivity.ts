import { RawMessageActivity } from '../raw/RawMessageActivity.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { MessageActivityType } from '../enum/MessageActivityType.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure

export interface MessageActivity {
	/** type of message activity */
	type: MessageActivityType;
	/** partyId from a Rich Presence event */
	partyId?: string;
}


export const wrapMessageActivity = fromApiCasing as (x: RawMessageActivity) => MessageActivity;

export const unwrapMessageActivity = toApiCasing as (x: MessageActivity) => RawMessageActivity;

export const wrapMessageActivityPartial = wrapMessageActivity as (x: Partial<RawMessageActivity>) => Partial<MessageActivity>;

export const unwrapMessageActivityPartial = unwrapMessageActivity as (x: Partial<MessageActivity>) => Partial<RawMessageActivity>;
