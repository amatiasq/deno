import { RawMessageApplication } from '../raw/RawMessageApplication.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
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


export const wrapMessageApplication = fromApiCasing as (x: RawMessageApplication) => MessageApplication;

export const unwrapMessageApplication = toApiCasing as (x: MessageApplication) => RawMessageApplication;

export const wrapMessageApplicationPartial = wrapMessageApplication as (x: Partial<RawMessageApplication>) => Partial<MessageApplication>;

export const unwrapMessageApplicationPartial = unwrapMessageApplication as (x: Partial<MessageApplication>) => Partial<RawMessageApplication>;
