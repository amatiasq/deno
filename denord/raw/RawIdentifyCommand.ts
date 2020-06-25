import { integer, IntentInteger } from '../internals/type-aliases.ts';
import { RawIdentifyConnection } from './RawIdentifyConnection.ts';
import { RawUpdateStatusCommand } from './RawUpdateStatusCommand.ts';

export interface RawIdentifyCommand {
	/** authentication token */
	token: string;
	/** connection properties */
	properties: RawIdentifyConnection;
	/** whether this connection supports compression of packets (DEFAULT: false) */
	compress?: boolean;
	/** value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list (DEFAULT: 50) */
	large_threshold?: integer;
	/** used for Guild Sharding */
	shard?: [integer, integer];
	/** presence structure for initial presence information */
	presence?: RawUpdateStatusCommand;
	/** enables dispatching of guild subscription events (presence and typing events) (DEFAULT: true) */
	guild_subscriptions?: boolean;
	/** the Gateway Intents you wish to receive */
	intents?: IntentInteger;
}
