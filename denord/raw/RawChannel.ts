import { ChannelType } from '../enum/ChannelType.ts';
import {
	ApplicationId,
	CategoryId,
	ChannelId,
	GuildId,
	MessageId,
	ISO8601Timestamp,
	UserId,
} from '../internals/type-aliases.ts';
import { RawOverwrite } from './RawOverwrite.ts';
import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
export interface RawChannel {
	/** the id of this channel */
	id: ChannelId;
	/** the type of channel */
	type: ChannelType;
	/** the id of the guild */
	guild_id?: GuildId;
	/** sorting position of the channel */
	position?: number;
	/** explicit permission overwrites for members and roles */
	permission_overwrites?: RawOverwrite[];
	/** the name of the channel (2-100 characters) */
	name?: string;
	/** the channel topic (0-1024 characters) */
	topic?: string;
	/** whether the channel is nsfw */
	nsfw?: boolean;
	/** the id of the last message sent in this channel (may not point to an existing or valid message) */
	last_message_id?: MessageId;
	/** the bitrate (in bits) of the voice channel */
	bitrate?: number;
	/** the user limit of the voice channel */
	user_limit?: number;
	/** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected */
	rate_limit_per_user?: number;
	/** the recipients of the DM */
	recipients?: RawUser[];
	/** icon hash */
	icon?: string;
	/** id of the DM creator */
	owner_id?: UserId;
	/** application id of the group DM creator if it is bot-created */
	application_id?: ApplicationId;
	/** id of the parent category for a channel (each parent category can contain up to 50 channels) */
	parent_id?: CategoryId;
	/** when the last pinned message was pinned (ISO8601 timestamp) */
	last_pin_timestamp?: ISO8601Timestamp;
	// METHODS: ../extensions/channelMethods.ts
}
