import { ApplicationId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-application-structure

export interface RawMessageApplication {
	/** id of the application */
	id: ApplicationId;
	/** id of the embed's image asset */
	cover_image?: string;
	/** application's description */
	description: string;
	/** id of the application's icon */
	icon: string;
	/** name of the application */
	name: string;
}
