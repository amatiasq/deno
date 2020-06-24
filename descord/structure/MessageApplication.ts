import { RawMessageApplication } from '../raw/RawMessageApplication.ts';
import { ApplicationId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-application-structure

export interface MessageApplication {
	/** id of the application */
	id: ApplicationId;
	/** id of the embed's image asset */
	coverImage?: string;
	/** application's description */
	description: string;
	/** id of the application's icon */
	icon: string;
	/** name of the application */
	name: string;
}


export function wrapMessageApplication(x: RawMessageApplication): MessageApplication {
	return {
		...x,
		coverImage: x.cover_image && x.cover_image,
	};
}

export function unwrapMessageApplication(x: MessageApplication): RawMessageApplication {
	return {
		...x,
		cover_image: x.coverImage && x.coverImage,
	};
}

export const wrapMessageApplicationPartial = wrapMessageApplication as (x: Partial<RawMessageApplication>) => Partial<MessageApplication>;

export const unwrapMessageApplicationPartial = unwrapMessageApplication as (x: Partial<MessageApplication>) => Partial<RawMessageApplication>;
