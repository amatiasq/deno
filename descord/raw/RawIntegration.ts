import {
	IntegrationId,
	RoleId,
	integer,
	ISO8601Timestamp,
} from '../internals/type-aliases.ts';
import { IntegrationExpireBehavior } from '../enum/IntegrationExpireBehavior.ts';
import { RawUser } from './RawUser.ts';
import { RawIntegrationAccount } from './RawIntegrationAccount.ts';

// https://discord.com/developers/docs/resources/guild#integration-object-integration-structure

export interface RawIntegration {
	/** integration id */
	id: IntegrationId;
	/** integration name */
	name: string;
	/** integration type (twitch, youtube, etc) */
	type: string;
	/** is this integration enabled */
	enabled: boolean;
	/** is this integration syncing */
	syncing: boolean;
	/** id that this integration uses for "subscribers" */
	role_id: RoleId;
	/** whether emoticons should be synced for this integration (twitch only currently) */
	enable_emoticons?: boolean;
	/** the behavior of expiring subscribers */
	expire_behavior: IntegrationExpireBehavior;
	/** the grace period (in days) before expiring subscribers */
	expire_grace_period: integer;
	/** user for this integration */
	user: RawUser;
	/** integration account information */
	account: RawIntegrationAccount;
	/** when this integration was last synced */
	synced_at: ISO8601Timestamp;
}
