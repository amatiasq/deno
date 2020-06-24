import { ApplicationId, UnixTimestamp } from '../internals/type-aliases.ts';
import { ActivityFlag } from '../enum/ActivityFlag.ts';
import { RawActivityAssets } from './RawActivityAssets.ts';
import { RawActivityEmoji } from './RawActivityEmoji.ts';
import { RawActivityParty } from './RawActivityParty.ts';
import { RawActivitySecrets } from './RawActivitySecrets.ts';
import { RawActivityTimestamps } from './RawActivityTimestamps.ts';

export interface RawActivity {
	/** the activity's name */
	name: string;
	/** activity type */
	type: number;
	/** stream url, is validated when type is 1 */
	url?: string;
	/** unix timestamp of when the activity was added to the user's session */
	created_at: UnixTimestamp;
	/** unix timestamps for start and/or end of the game */
	timestamps?: RawActivityTimestamps;
	/** application id for the game */
	application_id?: ApplicationId;
	/** what the player is currently doing */
	details?: string;
	/** the user's current party status */
	state?: string;
	/** the emoji used for a custom status */
	emoji?: RawActivityEmoji;
	/** information for the current party of the player */
	party?: RawActivityParty;
	/** images for the presence and their hover texts */
	assets?: RawActivityAssets;
	/** secrets for Rich Presence joining and spectating */
	secrets?: RawActivitySecrets;
	/** whether or not the activity is an instanced game session */
	instance?: boolean;
	/** activity flags ORd together, describes what the payload includes */
	flags?: ActivityFlag;
}
