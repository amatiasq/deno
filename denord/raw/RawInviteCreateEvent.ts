import {
	ChannelId,
	GuildId,
	integer,
	InviteCode,
	ISO8601Timestamp,
} from '../internals/type-aliases.ts';
import { RawUser } from './RawUser.ts';

export interface RawInviteCreateEvent {
	/** the channel the invite is for */
	channel_id: ChannelId;
	/** the unique invite code */
	code: InviteCode;
	/** the time at which the invite was created */
	created_at: ISO8601Timestamp;
	/** the guild of the invite */
	guild_id?: GuildId;
	/** the user that created the invite */
	inviter?: RawUser;
	/** how long the invite is valid for (in seconds) */
	max_age: integer;
	/** the maximum number of times the invite can be used */
	max_uses: integer;
	/** the target user for this invite */
	target_user?: Partial<RawUser>;
	/** the type of user target for this invite */
	target_user_type?: integer;
	/** whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role) */
	temporary: boolean;
	/** how many times the invite has been used (always will be 0) */
	uses: integer;
}
