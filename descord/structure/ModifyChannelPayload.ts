import { RawModifyChannelPayload } from '../raw/RawModifyChannelPayload.ts';
import { integer, CategoryId } from '../internals/type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';
import { Overwrite, wrapOverwrite, unwrapOverwrite } from './Overwrite.ts';

// https://discord.com/developers/docs/resources/channel#modify-channel-json-params

export interface ModifyChannelPayload {
	/** 2-100 character channel name	All */
	name?: string;
	/** the type of channel; only conversion between text and news is supported and only in guilds with the "NEWS" feature	Text, News */
	type?: ChannelType;
	/** the position of the channel in the left-hand listing	All */
	position?: integer;
	/** 0-1024 character channel topic	Text, News */
	topic?: string;
	/** whether the channel is nsfw	Text, News, Store */
	nsfw?: boolean;
	/** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manageMessages or manageChannel, are unaffected	Text */
	rateLimitPerUser?: integer;
	/** the bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers)	Voice */
	bitrate?: integer;
	/** the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit	Voice */
	userLimit?: integer;
	/** channel or category-specific permissions	All */
	permissionOverwrites?: Overwrite[];
	/** id of the new parent category for a channel	Text, News, Store, Voice */
	parentId?: CategoryId;
}


export function wrapModifyChannelPayload(x: RawModifyChannelPayload): ModifyChannelPayload {
	return {
		...x,
		rateLimitPerUser: x.rate_limit_per_user && x.rate_limit_per_user,
		userLimit: x.user_limit && x.user_limit,
		permissionOverwrites: x.permission_overwrites && x.permission_overwrites.map(wrapOverwrite),
		parentId: x.parent_id && x.parent_id,
	};
}

export function unwrapModifyChannelPayload(x: ModifyChannelPayload): RawModifyChannelPayload {
	return {
		...x,
		rate_limit_per_user: x.rateLimitPerUser && x.rateLimitPerUser,
		user_limit: x.userLimit && x.userLimit,
		permission_overwrites: x.permissionOverwrites && x.permissionOverwrites.map(unwrapOverwrite),
		parent_id: x.parentId && x.parentId,
	};
}

export const wrapModifyChannelPayloadPartial = wrapModifyChannelPayload as (x: Partial<RawModifyChannelPayload>) => Partial<ModifyChannelPayload>;

export const unwrapModifyChannelPayloadPartial = unwrapModifyChannelPayload as (x: Partial<ModifyChannelPayload>) => Partial<RawModifyChannelPayload>;
