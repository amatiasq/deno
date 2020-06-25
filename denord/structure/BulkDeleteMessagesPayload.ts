import { RawBulkDeleteMessagesPayload } from '../raw/RawBulkDeleteMessagesPayload.ts';
import { MessageId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#bulk-delete-messages-json-params

export interface BulkDeleteMessagesPayload {
	/** an array of message ids to delete (2-100) */
	messages: MessageId[];
}


export function wrapBulkDeleteMessagesPayload(x: RawBulkDeleteMessagesPayload): BulkDeleteMessagesPayload {
	return x;
}

export function unwrapBulkDeleteMessagesPayload(x: BulkDeleteMessagesPayload): RawBulkDeleteMessagesPayload {
	return x;
}

export const wrapBulkDeleteMessagesPayloadPartial = wrapBulkDeleteMessagesPayload as (x: Partial<RawBulkDeleteMessagesPayload>) => Partial<BulkDeleteMessagesPayload>;

export const unwrapBulkDeleteMessagesPayloadPartial = unwrapBulkDeleteMessagesPayload as (x: Partial<BulkDeleteMessagesPayload>) => Partial<RawBulkDeleteMessagesPayload>;
