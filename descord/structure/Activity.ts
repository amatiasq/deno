import { RawActivity } from '../raw/RawActivity.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ApplicationId, parseUnixTimestamp, unparseUnixTimestamp } from '../internals/type-aliases.ts';
import { ActivityFlag } from '../enum/ActivityFlag.ts';
import { ActivityAssets, wrapActivityAssets, unwrapActivityAssets } from './ActivityAssets.ts';
import { ActivityEmoji, wrapActivityEmoji, unwrapActivityEmoji } from './ActivityEmoji.ts';
import { ActivityParty, wrapActivityParty, unwrapActivityParty } from './ActivityParty.ts';
import { ActivitySecrets, wrapActivitySecrets, unwrapActivitySecrets } from './ActivitySecrets.ts';
import { ActivityTimestamps, wrapActivityTimestamps, unwrapActivityTimestamps } from './ActivityTimestamps.ts';

export interface Activity {
	/** the activity's name */
	name: string;
	/** activity type */
	type: number;
	/** stream url, is validated when type is 1 */
	url?: string;
	/** unix timestamp of when the activity was added to the user's session */
	createdAt: Date;
	/** unix timestamps for start and/or end of the game */
	timestamps?: ActivityTimestamps;
	/** application id for the game */
	applicationId?: ApplicationId;
	/** what the player is currently doing */
	details?: string;
	/** the user's current party status */
	state?: string;
	/** the emoji used for a custom status */
	emoji?: ActivityEmoji;
	/** information for the current party of the player */
	party?: ActivityParty;
	/** images for the presence and their hover texts */
	assets?: ActivityAssets;
	/** secrets for Rich Presence joining and spectating */
	secrets?: ActivitySecrets;
	/** whether or not the activity is an instanced game session */
	instance?: boolean;
	/** activity flags ORd together, describes what the payload includes */
	flags?: ActivityFlag;
}


export function wrapActivity(x: RawActivity): Activity {
	return {
		...fromApiCasing(x),
		createdAt: parseUnixTimestamp(x.created_at),
		timestamps: x.timestamps && wrapActivityTimestamps(x.timestamps),
		emoji: x.emoji && wrapActivityEmoji(x.emoji),
		party: x.party && wrapActivityParty(x.party),
		assets: x.assets && wrapActivityAssets(x.assets),
		secrets: x.secrets && wrapActivitySecrets(x.secrets),
	};
}

export function unwrapActivity(x: Activity): RawActivity {
	return {
		...toApiCasing(x),
		created_at: unparseUnixTimestamp(x.createdAt),
		timestamps: x.timestamps && unwrapActivityTimestamps(x.timestamps),
		emoji: x.emoji && unwrapActivityEmoji(x.emoji),
		party: x.party && unwrapActivityParty(x.party),
		assets: x.assets && unwrapActivityAssets(x.assets),
		secrets: x.secrets && unwrapActivitySecrets(x.secrets),
	};
}

export function wrapActivityPartial(x: Partial<RawActivity>): Partial<Activity> {
	return {
		...fromApiCasing(x),
		createdAt: x.created_at && parseUnixTimestamp(x.created_at),
		timestamps: x.timestamps && wrapActivityTimestamps(x.timestamps),
		emoji: x.emoji && wrapActivityEmoji(x.emoji),
		party: x.party && wrapActivityParty(x.party),
		assets: x.assets && wrapActivityAssets(x.assets),
		secrets: x.secrets && wrapActivitySecrets(x.secrets),
	};
}

export function unwrapActivityPartial(x: Partial<Activity>): Partial<RawActivity> {
	return {
		...toApiCasing(x),
		created_at: x.createdAt && unparseUnixTimestamp(x.createdAt),
		timestamps: x.timestamps && unwrapActivityTimestamps(x.timestamps),
		emoji: x.emoji && unwrapActivityEmoji(x.emoji),
		party: x.party && unwrapActivityParty(x.party),
		assets: x.assets && unwrapActivityAssets(x.assets),
		secrets: x.secrets && unwrapActivitySecrets(x.secrets),
	};
}
