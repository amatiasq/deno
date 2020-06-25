import { RawCreateGuildChannelPayload } from '../raw/RawCreateGuildChannelPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer, CategoryId } from '../internals/type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';
import { Overwrite, wrapOverwrite, unwrapOverwrite } from './Overwrite.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-channel-json-params

export interface CreateGuildChannelPayload {
	/** channel name (2-100 characters) */
	name: string;
	/** the type of channel */
	type?: ChannelType;
	/** channel topic (0-1024 characters) */
	topic?: string;
	/** the bitrate (in bits) of the voice channel (voice only) */
	bitrate?: integer;
	/** the user limit of the voice channel (voice only) */
	userLimit?: integer;
	/** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manageMessages or manageChannel, are unaffected */
	rateLimitPerUser?: integer;
	/** sorting position of the channel */
	position?: integer;
	/** the channel's permission overwrites */
	permissionOverwrites?: Overwrite[];
	/** id of the parent category for a channel */
	parentId?: CategoryId;
	/** whether the channel is nsfw */
	nsfw?: boolean;
}


export function wrapCreateGuildChannelPayload(x: RawCreateGuildChannelPayload): CreateGuildChannelPayload {
	return {
		...fromApiCasing(x),
		permissionOverwrites: x.permission_overwrites && x.permission_overwrites.map(wrapOverwrite),
	};
}

export function unwrapCreateGuildChannelPayload(x: CreateGuildChannelPayload): RawCreateGuildChannelPayload {
	return {
		...toApiCasing(x),
		permission_overwrites: x.permissionOverwrites && x.permissionOverwrites.map(unwrapOverwrite),
	};
}

export const wrapCreateGuildChannelPayloadPartial = wrapCreateGuildChannelPayload as (x: Partial<RawCreateGuildChannelPayload>) => Partial<CreateGuildChannelPayload>;

export const unwrapCreateGuildChannelPayloadPartial = unwrapCreateGuildChannelPayload as (x: Partial<CreateGuildChannelPayload>) => Partial<RawCreateGuildChannelPayload>;
