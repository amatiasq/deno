import { RawIdentifyCommand } from '../raw/RawIdentifyCommand.ts';
import { integer, Intent, parseIntentInteger, unparseIntentInteger } from '../internals/type-aliases.ts';
import { IdentifyConnection, wrapIdentifyConnection, unwrapIdentifyConnection } from './IdentifyConnection.ts';
import { UpdateStatusCommand, wrapUpdateStatusCommand, unwrapUpdateStatusCommand } from './UpdateStatusCommand.ts';

export interface IdentifyCommand {
	/** authentication token */
	token: string;
	/** connection properties */
	properties: IdentifyConnection;
	/** whether this connection supports compression of packets (DEFAULT: false) */
	compress?: boolean;
	/** value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list (DEFAULT: 50) */
	largeThreshold?: integer;
	/** used for Guild Sharding */
	shard?: [integer, integer];
	/** presence structure for initial presence information */
	presence?: UpdateStatusCommand;
	/** enables dispatching of guild subscription events (presence and typing events) (DEFAULT: true) */
	guildSubscriptions?: boolean;
	/** the Gateway Intents you wish to receive */
	intents?: Intent[];
}


export function wrapIdentifyCommand(x: RawIdentifyCommand): IdentifyCommand {
	return {
		...x,
		properties: wrapIdentifyConnection(x.properties),
		largeThreshold: x.large_threshold && x.large_threshold,
		presence: x.presence && wrapUpdateStatusCommand(x.presence),
		guildSubscriptions: x.guild_subscriptions && x.guild_subscriptions,
		intents: x.intents && parseIntentInteger(x.intents),
	};
}

export function unwrapIdentifyCommand(x: IdentifyCommand): RawIdentifyCommand {
	return {
		...x,
		properties: unwrapIdentifyConnection(x.properties),
		large_threshold: x.largeThreshold && x.largeThreshold,
		presence: x.presence && unwrapUpdateStatusCommand(x.presence),
		guild_subscriptions: x.guildSubscriptions && x.guildSubscriptions,
		intents: x.intents && unparseIntentInteger(x.intents),
	};
}

export function wrapIdentifyCommandPartial(x: Partial<RawIdentifyCommand>): Partial<IdentifyCommand> {
	return {
		...x,
		properties: x.properties && wrapIdentifyConnection(x.properties),
		largeThreshold: x.large_threshold && x.large_threshold,
		presence: x.presence && wrapUpdateStatusCommand(x.presence),
		guildSubscriptions: x.guild_subscriptions && x.guild_subscriptions,
		intents: x.intents && parseIntentInteger(x.intents),
	};
}

export function unwrapIdentifyCommandPartial(x: Partial<IdentifyCommand>): Partial<RawIdentifyCommand> {
	return {
		...x,
		properties: x.properties && unwrapIdentifyConnection(x.properties),
		large_threshold: x.largeThreshold && x.largeThreshold,
		presence: x.presence && unwrapUpdateStatusCommand(x.presence),
		guild_subscriptions: x.guildSubscriptions && x.guildSubscriptions,
		intents: x.intents && unparseIntentInteger(x.intents),
	};
}
