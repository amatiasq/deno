import { RawMessageActivity } from '../raw/RawMessageActivity.ts';
import { MessageActivityType } from '../enum/MessageActivityType.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure

export interface MessageActivity {
	/** type of message activity */
	type: MessageActivityType;
	/** partyId from a Rich Presence event */
	partyId?: string;
}


export function wrapMessageActivity(x: RawMessageActivity): MessageActivity {
	return {
		...x,
		partyId: x.party_id && x.party_id,
	};
}

export function unwrapMessageActivity(x: MessageActivity): RawMessageActivity {
	return {
		...x,
		party_id: x.partyId && x.partyId,
	};
}

export const wrapMessageActivityPartial = wrapMessageActivity as (x: Partial<RawMessageActivity>) => Partial<MessageActivity>;

export const unwrapMessageActivityPartial = unwrapMessageActivity as (x: Partial<MessageActivity>) => Partial<RawMessageActivity>;
