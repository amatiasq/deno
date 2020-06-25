import {
	GuildId,
	RoleId,
	ISO8601Timestamp,
} from '../internals/type-aliases.ts';
import { PresenceStatus } from '../enum/PresenceStatus.ts';
import { RawActivity } from './RawActivity.ts';
import { RawClientStatus } from './RawClientStatus.ts';
import { RawUser } from './RawUser.ts';

export interface RawPresenceUpdateEvent {
	/** the user presence is being updated for */
	user: RawUser;
	/** roles this user is in */
	roles: RoleId[];
	/** null, or the user's current activity */
	game?: RawActivity;
	/** id of the guild */
	guild_id: GuildId;
	/** either "idle", "dnd", "online", or "offline" */
	status: PresenceStatus;
	/** user's current activities */
	activities: RawActivity[];
	/** user's platform-dependent status */
	client_status: RawClientStatus;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premium_since?: ISO8601Timestamp;
	/** this users guild nickname (if one is set) */
	nick?: string;
}
