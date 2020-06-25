import { RawConnection } from '../raw/RawConnection.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { Integration, wrapIntegration, wrapIntegrationPartial, unwrapIntegration, unwrapIntegrationPartial } from './Integration.ts';
import { VisibilityType } from '../enum/VisibilityType.ts';

// https://discord.com/developers/docs/resources/user#connection-object-connection-structure

export interface Connection {
	/** id of the connection account */
	id: string;
	/** the username of the connection account */
	name: string;
	/** the service of the connection (twitch, youtube) */
	type: string;
	/** whether the connection is revoked */
	revoked?: boolean;
	/** an array of partial server integrations */
	integrations?: Partial<Integration>[];
	/** whether the connection is verified */
	verified: boolean;
	/** whether friend sync is enabled for this connection */
	friendSync: boolean;
	/** whether activities related to this connection will be shown in presence updates */
	showActivity: boolean;
	/** visibility of this connection */
	visibility: VisibilityType;
}


export function wrapConnection(x: RawConnection): Connection {
	return {
		...fromApiCasing(x),
		integrations: x.integrations && x.integrations.map(wrapIntegrationPartial),
	};
}

export function unwrapConnection(x: Connection): RawConnection {
	return {
		...toApiCasing(x),
		integrations: x.integrations && x.integrations.map(unwrapIntegrationPartial),
	};
}

export const wrapConnectionPartial = wrapConnection as (x: Partial<RawConnection>) => Partial<Connection>;

export const unwrapConnectionPartial = unwrapConnection as (x: Partial<Connection>) => Partial<RawConnection>;
