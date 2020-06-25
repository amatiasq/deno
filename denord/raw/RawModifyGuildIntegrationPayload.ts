import { integer } from '../internals/type-aliases.ts';
import { IntegrationExpireBehavior } from '../enum/IntegrationExpireBehavior.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-integration-json-params

export interface RawModifyGuildIntegrationPayload {
	/** the behavior when an integration subscription lapses (see the integration expire behaviors documentation) */
	expire_behavior: IntegrationExpireBehavior;
	/** period (in days) where the integration will ignore lapsed subscriptions */
	expire_grace_period: integer;
	/** whether emoticons should be synced for this integration (twitch only currently) */
	enable_emoticons: boolean;
}
