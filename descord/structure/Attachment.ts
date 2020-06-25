import { RawAttachment } from '../raw/RawAttachment.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { AttachmentId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure

export interface Attachment {
	/** attachment id */
	id: AttachmentId;
	/** name of file attached */
	filename: string;
	/** size of file in bytes */
	size: integer;
	/** source url of file */
	url: string;
	/** a proxied url of file */
	proxyUrl: string;
	/** height of file (if image) */
	height: integer;
	/** width of file (if image) */
	width: integer;
}


export const wrapAttachment = fromApiCasing as (x: RawAttachment) => Attachment;

export const unwrapAttachment = toApiCasing as (x: Attachment) => RawAttachment;

export const wrapAttachmentPartial = wrapAttachment as (x: Partial<RawAttachment>) => Partial<Attachment>;

export const unwrapAttachmentPartial = unwrapAttachment as (x: Partial<Attachment>) => Partial<RawAttachment>;
