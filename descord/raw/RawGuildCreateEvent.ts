import { ISO8601Timestamp, integer } from '../internals/type-aliases.ts';
import { RawChannel } from './RawChannel.ts';
import { RawGuildMember } from './RawGuildMember.ts';
import { RawGuild } from './RawGuild.ts';
import { RawPresenceUpdateEvent } from './RawPresenceUpdateEvent.ts';
import { RawVoiceState } from './RawVoiceState.ts';

export interface RawGuildCreateEvent extends RawGuild {
	/** when this guild was joined at (ISO8601 timestamp) */
	joined_at?: ISO8601Timestamp;
	/** true if this is considered a large guild */
	large?: boolean;
	/** true if this guild is unavailable due to an outage */
	unavailable?: boolean;
	/** total number of members in this guild */
	member_count?: integer;
	/** states of members currently in voice channels; lacks the guild_id key */
	voice_states?: RawVoiceState[];
	/** users in the guild */
	members?: RawGuildMember[];
	/** channels in the guild */
	channels?: RawChannel[];
	/** presences of the members in the guild, will only include non-offline members if the size is greater than large threshold */
	presences?: RawPresenceUpdateEvent[];
}
