import { integer, CategoryId } from '../internals/type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';
import { RawOverwrite } from './RawOverwrite.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-channel-json-params

export interface RawCreateGuildChannelPayload {
	/** channel name (2-100 characters) */
	name: string;
	/** the type of channel */
	type?: ChannelType;
	/** channel topic (0-1024 characters) */
	topic?: string;
	/** the bitrate (in bits) of the voice channel (voice only) */
	bitrate?: integer;
	/** the user limit of the voice channel (voice only) */
	user_limit?: integer;
	/** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected */
	rate_limit_per_user?: integer;
	/** sorting position of the channel */
	position?: integer;
	/** the channel's permission overwrites */
	permission_overwrites?: RawOverwrite[];
	/** id of the parent category for a channel */
	parent_id?: CategoryId;
	/** whether the channel is nsfw */
	nsfw?: boolean;
}
