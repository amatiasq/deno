import { RawIntegration } from './RawIntegration.ts';
import { VisibilityType } from '../enum/VisibilityType.ts';

// https://discord.com/developers/docs/resources/user#connection-object-connection-structure

export interface RawConnection {
	/** id of the connection account */
	id: string;
	/** the username of the connection account */
	name: string;
	/** the service of the connection (twitch, youtube) */
	type: string;
	/** whether the connection is revoked */
	revoked?: boolean;
	/** an array of partial server integrations */
	integrations?: Partial<RawIntegration>[];
	/** whether the connection is verified */
	verified: boolean;
	/** whether friend sync is enabled for this connection */
	friend_sync: boolean;
	/** whether activities related to this connection will be shown in presence updates */
	show_activity: boolean;
	/** visibility of this connection */
	visibility: VisibilityType;
}
