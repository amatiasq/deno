import { RawChannel } from '../raw/RawChannel.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { channelMethods } from '../extensions/channelMethods.ts';
import { ChannelType } from '../enum/ChannelType.ts';
import {
	ApplicationId,
	CategoryId,
	ChannelId,
	GuildId,
	MessageId,
	parseISO8601Timestamp, unparseISO8601Timestamp,
	UserId,
} from '../internals/type-aliases.ts';
import { Overwrite, wrapOverwrite, unwrapOverwrite } from './Overwrite.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

// https://discord.com/developers/docs/resources/channel#channel-object-channel-structure

export interface Channel extends ReturnType<typeof channelMethods> {
	/** the id of this channel */
	id: ChannelId;
	/** the type of channel */
	type: ChannelType;
	/** the id of the guild */
	guildId?: GuildId;
	/** sorting position of the channel */
	position?: number;
	/** explicit permission overwrites for members and roles */
	permissionOverwrites?: Overwrite[];
	/** the name of the channel (2-100 characters) */
	name?: string;
	/** the channel topic (0-1024 characters) */
	topic?: string;
	/** whether the channel is nsfw */
	nsfw?: boolean;
	/** the id of the last message sent in this channel (may not point to an existing or valid message) */
	lastMessageId?: MessageId;
	/** the bitrate (in bits) of the voice channel */
	bitrate?: number;
	/** the user limit of the voice channel */
	userLimit?: number;
	/** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manageMessages or manageChannel, are unaffected */
	rateLimitPerUser?: number;
	/** the recipients of the DM */
	recipients?: User[];
	/** icon hash */
	icon?: string;
	/** id of the DM creator */
	ownerId?: UserId;
	/** application id of the group DM creator if it is bot-created */
	applicationId?: ApplicationId;
	/** id of the parent category for a channel (each parent category can contain up to 50 channels) */
	parentId?: CategoryId;
	/** when the last pinned message was pinned (ISO8601 timestamp) */
	lastPinTimestamp?: Date;
	// METHODS: ../extensions/channelMethods.ts
}


export function wrapChannel(x: RawChannel): Channel {
	return {
		...fromApiCasing(x),
		permissionOverwrites: x.permission_overwrites && x.permission_overwrites.map(wrapOverwrite),
		recipients: x.recipients && x.recipients.map(wrapUser),
		lastPinTimestamp: x.last_pin_timestamp && parseISO8601Timestamp(x.last_pin_timestamp),
		...channelMethods(x),
	};
}

export function unwrapChannel(x: Channel): RawChannel {
	return {
		...toApiCasing(x),
		permission_overwrites: x.permissionOverwrites && x.permissionOverwrites.map(unwrapOverwrite),
		recipients: x.recipients && x.recipients.map(unwrapUser),
		last_pin_timestamp: x.lastPinTimestamp && unparseISO8601Timestamp(x.lastPinTimestamp),
	};
}

export const wrapChannelPartial = wrapChannel as (x: Partial<RawChannel>) => Partial<Channel>;

export const unwrapChannelPartial = unwrapChannel as (x: Partial<Channel>) => Partial<RawChannel>;
