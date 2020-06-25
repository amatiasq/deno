import { RawIntegrationAccount } from '../raw/RawIntegrationAccount.ts';
import { AccountId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure

export interface IntegrationAccount {
	/** id of the account */
	id: AccountId;
	/** name of the account */
	name: string;
}


export function wrapIntegrationAccount(x: RawIntegrationAccount): IntegrationAccount {
	return x;
}

export function unwrapIntegrationAccount(x: IntegrationAccount): RawIntegrationAccount {
	return x;
}

export const wrapIntegrationAccountPartial = wrapIntegrationAccount as (x: Partial<RawIntegrationAccount>) => Partial<IntegrationAccount>;

export const unwrapIntegrationAccountPartial = unwrapIntegrationAccount as (x: Partial<IntegrationAccount>) => Partial<RawIntegrationAccount>;
