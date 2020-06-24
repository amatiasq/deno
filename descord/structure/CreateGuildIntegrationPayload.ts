import { RawCreateGuildIntegrationPayload } from '../raw/RawCreateGuildIntegrationPayload.ts';
import { IntegrationId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-integration-json-params

export interface CreateGuildIntegrationPayload {
	/** the integration type */
	type: string;
	/** the integration id */
	id: IntegrationId;
}


export function wrapCreateGuildIntegrationPayload(x: RawCreateGuildIntegrationPayload): CreateGuildIntegrationPayload {
	return x;
}

export function unwrapCreateGuildIntegrationPayload(x: CreateGuildIntegrationPayload): RawCreateGuildIntegrationPayload {
	return x;
}

export const wrapCreateGuildIntegrationPayloadPartial = wrapCreateGuildIntegrationPayload as (x: Partial<RawCreateGuildIntegrationPayload>) => Partial<CreateGuildIntegrationPayload>;

export const unwrapCreateGuildIntegrationPayloadPartial = unwrapCreateGuildIntegrationPayload as (x: Partial<CreateGuildIntegrationPayload>) => Partial<RawCreateGuildIntegrationPayload>;
