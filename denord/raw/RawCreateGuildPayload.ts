import {
	VoiceRegionId,
	ImageData,
	ChannelId,
	integer,
} from '../internals/type-aliases.ts';
import { VerificationLevel } from '../enum/VerificationLevel.ts';
import { MessageNotificationLevel } from '../enum/MessageNotificationLevel.ts';
import { ExplicitContentFilterLevel } from '../enum/ExplicitContentFilterLevel.ts';
import { RawRole } from './RawRole.ts';
import { RawChannel } from './RawChannel.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-json-params

export interface RawCreateGuildPayload {
	/** name of the guild (2-100 characters) */
	name: string;
	/** voice region id */
	region?: VoiceRegionId;
	/** base64 128x128 image for the guild icon */
	icon?: ImageData;
	/** verification level */
	verification_level?: VerificationLevel;
	/** default message notification level */
	default_message_notifications?: MessageNotificationLevel;
	/** explicit content filter level */
	explicit_content_filter?: ExplicitContentFilterLevel;
	/** new guild roles */
	roles?: RawRole[];
	/** new guild's channels */
	channels?: Partial<RawChannel>[];
	/** id for afk channel */
	afk_channel_id?: ChannelId;
	/** afk timeout in seconds */
	afk_timeout?: integer;
	/** the id of the channel where guild notices such as welcome messages and boost events are posted */
	system_channel_id?: ChannelId;
}
