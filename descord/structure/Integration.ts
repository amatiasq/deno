import { RawIntegration } from '../raw/RawIntegration.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import {
	IntegrationId,
	RoleId,
	integer,
	parseISO8601Timestamp, unparseISO8601Timestamp,
} from '../internals/type-aliases.ts';
import { IntegrationExpireBehavior } from '../enum/IntegrationExpireBehavior.ts';
import { User, wrapUser, unwrapUser } from './User.ts';
import { IntegrationAccount, wrapIntegrationAccount, unwrapIntegrationAccount } from './IntegrationAccount.ts';

// https://discord.com/developers/docs/resources/guild#integration-object-integration-structure

export interface Integration {
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
	roleId: RoleId;
	/** whether emoticons should be synced for this integration (twitch only currently) */
	enableEmoticons?: boolean;
	/** the behavior of expiring subscribers */
	expireBehavior: IntegrationExpireBehavior;
	/** the grace period (in days) before expiring subscribers */
	expireGracePeriod: integer;
	/** user for this integration */
	user: User;
	/** integration account information */
	account: IntegrationAccount;
	/** when this integration was last synced */
	syncedAt: Date;
}


export function wrapIntegration(x: RawIntegration): Integration {
	return {
		...fromApiCasing(x),
		user: wrapUser(x.user),
		account: wrapIntegrationAccount(x.account),
		syncedAt: parseISO8601Timestamp(x.synced_at),
	};
}

export function unwrapIntegration(x: Integration): RawIntegration {
	return {
		...toApiCasing(x),
		user: unwrapUser(x.user),
		account: unwrapIntegrationAccount(x.account),
		synced_at: unparseISO8601Timestamp(x.syncedAt),
	};
}

export function wrapIntegrationPartial(x: Partial<RawIntegration>): Partial<Integration> {
	return {
		...fromApiCasing(x),
		user: x.user && wrapUser(x.user),
		account: x.account && wrapIntegrationAccount(x.account),
		syncedAt: x.synced_at && parseISO8601Timestamp(x.synced_at),
	};
}

export function unwrapIntegrationPartial(x: Partial<Integration>): Partial<RawIntegration> {
	return {
		...toApiCasing(x),
		user: x.user && unwrapUser(x.user),
		account: x.account && unwrapIntegrationAccount(x.account),
		synced_at: x.syncedAt && unparseISO8601Timestamp(x.syncedAt),
	};
}
