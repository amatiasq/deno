import { RawMessageDeleteEvent } from '../raw/RawMessageDeleteEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface MessageDeleteEvent {
	/** the id of the message */
	id: MessageId;
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the guild */
	guildId?: GuildId;
}


export const wrapMessageDeleteEvent = fromApiCasing as (x: RawMessageDeleteEvent) => MessageDeleteEvent;

export const unwrapMessageDeleteEvent = toApiCasing as (x: MessageDeleteEvent) => RawMessageDeleteEvent;

export const wrapMessageDeleteEventPartial = wrapMessageDeleteEvent as (x: Partial<RawMessageDeleteEvent>) => Partial<MessageDeleteEvent>;

export const unwrapMessageDeleteEventPartial = unwrapMessageDeleteEvent as (x: Partial<MessageDeleteEvent>) => Partial<RawMessageDeleteEvent>;
