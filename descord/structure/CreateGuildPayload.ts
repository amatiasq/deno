import { RawCreateGuildPayload } from '../raw/RawCreateGuildPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import {
	VoiceRegionId,
	ImageData,
	ChannelId,
	integer,
} from '../internals/type-aliases.ts';
import { VerificationLevel } from '../enum/VerificationLevel.ts';
import { MessageNotificationLevel } from '../enum/MessageNotificationLevel.ts';
import { ExplicitContentFilterLevel } from '../enum/ExplicitContentFilterLevel.ts';
import { Role, wrapRole, unwrapRole } from './Role.ts';
import { Channel, wrapChannel, wrapChannelPartial, unwrapChannel, unwrapChannelPartial } from './Channel.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-json-params

export interface CreateGuildPayload {
	/** name of the guild (2-100 characters) */
	name: string;
	/** voice region id */
	region?: VoiceRegionId;
	/** base64 128x128 image for the guild icon */
	icon?: ImageData;
	/** verification level */
	verificationLevel?: VerificationLevel;
	/** default message notification level */
	defaultMessageNotifications?: MessageNotificationLevel;
	/** explicit content filter level */
	explicitContentFilter?: ExplicitContentFilterLevel;
	/** new guild roles */
	roles?: Role[];
	/** new guild's channels */
	channels?: Partial<Channel>[];
	/** id for afk channel */
	afkChannelId?: ChannelId;
	/** afk timeout in seconds */
	afkTimeout?: integer;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	systemChannelId?: ChannelId;
}


export function wrapCreateGuildPayload(x: RawCreateGuildPayload): CreateGuildPayload {
	return {
		...fromApiCasing(x),
		roles: x.roles && x.roles.map(wrapRole),
		channels: x.channels && x.channels.map(wrapChannelPartial),
	};
}

export function unwrapCreateGuildPayload(x: CreateGuildPayload): RawCreateGuildPayload {
	return {
		...toApiCasing(x),
		roles: x.roles && x.roles.map(unwrapRole),
		channels: x.channels && x.channels.map(unwrapChannelPartial),
	};
}

export const wrapCreateGuildPayloadPartial = wrapCreateGuildPayload as (x: Partial<RawCreateGuildPayload>) => Partial<CreateGuildPayload>;

export const unwrapCreateGuildPayloadPartial = unwrapCreateGuildPayload as (x: Partial<CreateGuildPayload>) => Partial<RawCreateGuildPayload>;
