import { integer, CategoryId } from '../internals/type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';
import { RawOverwrite } from './RawOverwrite.ts';

// https://discord.com/developers/docs/resources/channel#modify-channel-json-params

export interface RawModifyChannelPayload {
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
	/** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected	Text */
	rate_limit_per_user?: integer;
	/** the bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers)	Voice */
	bitrate?: integer;
	/** the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit	Voice */
	user_limit?: integer;
	/** channel or category-specific permissions	All */
	permission_overwrites?: RawOverwrite[];
	/** id of the new parent category for a channel	Text, News, Store, Voice */
	parent_id?: CategoryId;
}
