import { RawIntegration } from '../raw/RawIntegration.ts';
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
		...x,
		roleId: x.role_id,
		enableEmoticons: x.enable_emoticons && x.enable_emoticons,
		expireBehavior: x.expire_behavior,
		expireGracePeriod: x.expire_grace_period,
		user: wrapUser(x.user),
		account: wrapIntegrationAccount(x.account),
		syncedAt: parseISO8601Timestamp(x.synced_at),
	};
}

export function unwrapIntegration(x: Integration): RawIntegration {
	return {
		...x,
		role_id: x.roleId,
		enable_emoticons: x.enableEmoticons && x.enableEmoticons,
		expire_behavior: x.expireBehavior,
		expire_grace_period: x.expireGracePeriod,
		user: unwrapUser(x.user),
		account: unwrapIntegrationAccount(x.account),
		synced_at: unparseISO8601Timestamp(x.syncedAt),
	};
}

export function wrapIntegrationPartial(x: Partial<RawIntegration>): Partial<Integration> {
	return {
		...x,
		roleId: x.role_id && x.role_id,
		enableEmoticons: x.enable_emoticons && x.enable_emoticons,
		expireBehavior: x.expire_behavior && x.expire_behavior,
		expireGracePeriod: x.expire_grace_period && x.expire_grace_period,
		user: x.user && wrapUser(x.user),
		account: x.account && wrapIntegrationAccount(x.account),
		syncedAt: x.synced_at && parseISO8601Timestamp(x.synced_at),
	};
}

export function unwrapIntegrationPartial(x: Partial<Integration>): Partial<RawIntegration> {
	return {
		...x,
		role_id: x.roleId && x.roleId,
		enable_emoticons: x.enableEmoticons && x.enableEmoticons,
		expire_behavior: x.expireBehavior && x.expireBehavior,
		expire_grace_period: x.expireGracePeriod && x.expireGracePeriod,
		user: x.user && unwrapUser(x.user),
		account: x.account && unwrapIntegrationAccount(x.account),
		synced_at: x.syncedAt && unparseISO8601Timestamp(x.syncedAt),
	};
}
