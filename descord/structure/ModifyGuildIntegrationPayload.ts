import { RawModifyGuildIntegrationPayload } from '../raw/RawModifyGuildIntegrationPayload.ts';
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


export function wrapModifyGuildIntegrationPayload(x: RawModifyGuildIntegrationPayload): ModifyGuildIntegrationPayload {
	return {
		...x,
		expireBehavior: x.expire_behavior,
		expireGracePeriod: x.expire_grace_period,
		enableEmoticons: x.enable_emoticons,
	};
}

export function unwrapModifyGuildIntegrationPayload(x: ModifyGuildIntegrationPayload): RawModifyGuildIntegrationPayload {
	return {
		...x,
		expire_behavior: x.expireBehavior,
		expire_grace_period: x.expireGracePeriod,
		enable_emoticons: x.enableEmoticons,
	};
}

export function wrapModifyGuildIntegrationPayloadPartial(x: Partial<RawModifyGuildIntegrationPayload>): Partial<ModifyGuildIntegrationPayload> {
	return {
		...x,
		expireBehavior: x.expire_behavior && x.expire_behavior,
		expireGracePeriod: x.expire_grace_period && x.expire_grace_period,
		enableEmoticons: x.enable_emoticons && x.enable_emoticons,
	};
}

export function unwrapModifyGuildIntegrationPayloadPartial(x: Partial<ModifyGuildIntegrationPayload>): Partial<RawModifyGuildIntegrationPayload> {
	return {
		...x,
		expire_behavior: x.expireBehavior && x.expireBehavior,
		expire_grace_period: x.expireGracePeriod && x.expireGracePeriod,
		enable_emoticons: x.enableEmoticons && x.enableEmoticons,
	};
}
