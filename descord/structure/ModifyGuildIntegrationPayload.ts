import { RawModifyGuildIntegrationPayload } from '../raw/RawModifyGuildIntegrationPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { integer } from '../internals/type-aliases.ts';
import { IntegrationExpireBehavior } from '../enum/IntegrationExpireBehavior.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-integration-json-params

export interface ModifyGuildIntegrationPayload {
	/** the behavior when an integration subscription lapses (see the integration expire behaviors documentation) */
	expireBehavior: IntegrationExpireBehavior;
	/** period (in days) where the integration will ignore lapsed subscriptions */
	expireGracePeriod: integer;
	/** whether emoticons should be synced for this integration (twitch only currently) */
	enableEmoticons: boolean;
}


export const wrapModifyGuildIntegrationPayload = fromApiCasing as (x: RawModifyGuildIntegrationPayload) => ModifyGuildIntegrationPayload;

export const unwrapModifyGuildIntegrationPayload = toApiCasing as (x: ModifyGuildIntegrationPayload) => RawModifyGuildIntegrationPayload;

export const wrapModifyGuildIntegrationPayloadPartial = wrapModifyGuildIntegrationPayload as (x: Partial<RawModifyGuildIntegrationPayload>) => Partial<ModifyGuildIntegrationPayload>;

export const unwrapModifyGuildIntegrationPayloadPartial = unwrapModifyGuildIntegrationPayload as (x: Partial<ModifyGuildIntegrationPayload>) => Partial<RawModifyGuildIntegrationPayload>;
