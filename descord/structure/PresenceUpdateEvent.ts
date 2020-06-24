import { RawPresenceUpdateEvent } from '../raw/RawPresenceUpdateEvent.ts';
import {
	GuildId,
	RoleId,
	parseISO8601Timestamp, unparseISO8601Timestamp,
} from '../internals/type-aliases.ts';
import { PresenceStatus } from '../enum/PresenceStatus.ts';
import { Activity, wrapActivity, unwrapActivity } from './Activity.ts';
import { ClientStatus, wrapClientStatus, unwrapClientStatus } from './ClientStatus.ts';
import { User, wrapUser, unwrapUser } from './User.ts';

export interface PresenceUpdateEvent {
	/** the user presence is being updated for */
	user: User;
	/** roles this user is in */
	roles: RoleId[];
	/** null, or the user's current activity */
	game?: Activity;
	/** id of the guild */
	guildId: GuildId;
	/** either "idle", "dnd", "online", or "offline" */
	status: PresenceStatus;
	/** user's current activities */
	activities: Activity[];
	/** user's platform-dependent status */
	clientStatus: ClientStatus;
	/** when the user started boosting the guild (ISO8601 timestamp) */
	premiumSince?: Date;
	/** this users guild nickname (if one is set) */
	nick?: string;
}


export function wrapPresenceUpdateEvent(x: RawPresenceUpdateEvent): PresenceUpdateEvent {
	return {
		...x,
		user: wrapUser(x.user),
		game: x.game && wrapActivity(x.game),
		guildId: x.guild_id,
		activities: x.activities.map(wrapActivity),
		clientStatus: wrapClientStatus(x.client_status),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapPresenceUpdateEvent(x: PresenceUpdateEvent): RawPresenceUpdateEvent {
	return {
		...x,
		user: unwrapUser(x.user),
		game: x.game && unwrapActivity(x.game),
		guild_id: x.guildId,
		activities: x.activities.map(unwrapActivity),
		client_status: unwrapClientStatus(x.clientStatus),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}

export function wrapPresenceUpdateEventPartial(x: Partial<RawPresenceUpdateEvent>): Partial<PresenceUpdateEvent> {
	return {
		...x,
		user: x.user && wrapUser(x.user),
		game: x.game && wrapActivity(x.game),
		guildId: x.guild_id && x.guild_id,
		activities: x.activities && x.activities.map(wrapActivity),
		clientStatus: x.client_status && wrapClientStatus(x.client_status),
		premiumSince: x.premium_since && parseISO8601Timestamp(x.premium_since),
	};
}

export function unwrapPresenceUpdateEventPartial(x: Partial<PresenceUpdateEvent>): Partial<RawPresenceUpdateEvent> {
	return {
		...x,
		user: x.user && unwrapUser(x.user),
		game: x.game && unwrapActivity(x.game),
		guild_id: x.guildId && x.guildId,
		activities: x.activities && x.activities.map(unwrapActivity),
		client_status: x.clientStatus && unwrapClientStatus(x.clientStatus),
		premium_since: x.premiumSince && unparseISO8601Timestamp(x.premiumSince),
	};
}
