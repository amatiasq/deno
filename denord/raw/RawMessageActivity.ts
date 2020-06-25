import { MessageActivityType } from '../enum/MessageActivityType.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure

export interface RawMessageActivity {
	/** type of message activity */
	type: MessageActivityType;
	/** party_id from a Rich Presence event */
	party_id?: string;
}
