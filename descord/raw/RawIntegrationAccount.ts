import { AccountId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure

export interface RawIntegrationAccount {
	/** id of the account */
	id: AccountId;
	/** name of the account */
	name: string;
}
