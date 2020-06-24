import { MessageId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#bulk-delete-messages-json-params

export interface RawBulkDeleteMessagesPayload {
	/** an array of message ids to delete (2-100) */
	messages: MessageId[];
}
