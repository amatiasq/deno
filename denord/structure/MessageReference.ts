import { RawMessageReference } from '../raw/RawMessageReference.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { MessageId, ChannelId, GuildId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure

export interface MessageReference {
	/** id of the originating message */
	messageId?: MessageId;
	/** id of the originating message's channel */
	channelId: ChannelId;
	/** id of the originating message's guild */
	guildId?: GuildId;
}


export const wrapMessageReference = fromApiCasing as (x: RawMessageReference) => MessageReference;

export const unwrapMessageReference = toApiCasing as (x: MessageReference) => RawMessageReference;

export const wrapMessageReferencePartial = wrapMessageReference as (x: Partial<RawMessageReference>) => Partial<MessageReference>;

export const unwrapMessageReferencePartial = unwrapMessageReference as (x: Partial<MessageReference>) => Partial<RawMessageReference>;
