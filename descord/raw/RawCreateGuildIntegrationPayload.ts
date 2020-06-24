import { IntegrationId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-integration-json-params

export interface RawCreateGuildIntegrationPayload {
	/** the integration type */
	type: string;
	/** the integration id */
	id: IntegrationId;
}
