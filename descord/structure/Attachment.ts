import { RawAttachment } from '../raw/RawAttachment.ts';
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


export function wrapAttachment(x: RawAttachment): Attachment {
	return {
		...x,
		proxyUrl: x.proxy_url,
	};
}

export function unwrapAttachment(x: Attachment): RawAttachment {
	return {
		...x,
		proxy_url: x.proxyUrl,
	};
}

export function wrapAttachmentPartial(x: Partial<RawAttachment>): Partial<Attachment> {
	return {
		...x,
		proxyUrl: x.proxy_url && x.proxy_url,
	};
}

export function unwrapAttachmentPartial(x: Partial<Attachment>): Partial<RawAttachment> {
	return {
		...x,
		proxy_url: x.proxyUrl && x.proxyUrl,
	};
}
