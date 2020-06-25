import { integer } from '../internals/type-aliases.ts';
import { RawUnavailableGuild } from './RawUnavailableGuild.ts';
import { RawUser } from './RawUser.ts';

export interface RawReadyEvent {
	/** gateway version */
	v: integer;
	/** information about the user including email */
	user: RawUser;
	/** empty array */
	private_channels: [];
	/** the guilds the user is in */
	guilds: RawUnavailableGuild[];
	/** used for resuming connections */
	session_id: string;
	/** the shard information associated with this session, if sent when identifying */
	shard?: [integer, integer];
}
