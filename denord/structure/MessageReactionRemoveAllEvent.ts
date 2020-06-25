import { RawMessageReactionRemoveAllEvent } from '../raw/RawMessageReactionRemoveAllEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId, MessageId } from '../internals/type-aliases.ts';

export interface MessageReactionRemoveAllEvent {
	/** the id of the channel */
	channelId: ChannelId;
	/** the id of the message */
	messageId: MessageId;
	/** the id of the guild */
	guildId?: GuildId;
}


export const wrapMessageReactionRemoveAllEvent = fromApiCasing as (x: RawMessageReactionRemoveAllEvent) => MessageReactionRemoveAllEvent;

export const unwrapMessageReactionRemoveAllEvent = toApiCasing as (x: MessageReactionRemoveAllEvent) => RawMessageReactionRemoveAllEvent;

export const wrapMessageReactionRemoveAllEventPartial = wrapMessageReactionRemoveAllEvent as (x: Partial<RawMessageReactionRemoveAllEvent>) => Partial<MessageReactionRemoveAllEvent>;

export const unwrapMessageReactionRemoveAllEventPartial = unwrapMessageReactionRemoveAllEvent as (x: Partial<MessageReactionRemoveAllEvent>) => Partial<RawMessageReactionRemoveAllEvent>;
