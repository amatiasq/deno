import { RawMessageDeleteBulkEvent } from '../raw/RawMessageDeleteBulkEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface MessageDeleteBulkEvent {
	/** the ids of the messages */
	ids: MessageId[];
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the guild */
	guildId?: GuildId;
}


export const wrapMessageDeleteBulkEvent = fromApiCasing as (x: RawMessageDeleteBulkEvent) => MessageDeleteBulkEvent;

export const unwrapMessageDeleteBulkEvent = toApiCasing as (x: MessageDeleteBulkEvent) => RawMessageDeleteBulkEvent;

export const wrapMessageDeleteBulkEventPartial = wrapMessageDeleteBulkEvent as (x: Partial<RawMessageDeleteBulkEvent>) => Partial<MessageDeleteBulkEvent>;

export const unwrapMessageDeleteBulkEventPartial = unwrapMessageDeleteBulkEvent as (x: Partial<MessageDeleteBulkEvent>) => Partial<RawMessageDeleteBulkEvent>;
