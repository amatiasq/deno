import { RawModifyGuildChannelPositionsPayload } from '../raw/RawModifyGuildChannelPositionsPayload.ts';
import { ChannelId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions-json-params

export interface ModifyGuildChannelPositionsPayload {
	/** channel id */
	id: ChannelId;
	/** sorting position of the channel */
	position?: integer;
}


export function wrapModifyGuildChannelPositionsPayload(x: RawModifyGuildChannelPositionsPayload): ModifyGuildChannelPositionsPayload {
	return x;
}

export function unwrapModifyGuildChannelPositionsPayload(x: ModifyGuildChannelPositionsPayload): RawModifyGuildChannelPositionsPayload {
	return x;
}

export const wrapModifyGuildChannelPositionsPayloadPartial = wrapModifyGuildChannelPositionsPayload as (x: Partial<RawModifyGuildChannelPositionsPayload>) => Partial<ModifyGuildChannelPositionsPayload>;

export const unwrapModifyGuildChannelPositionsPayloadPartial = unwrapModifyGuildChannelPositionsPayload as (x: Partial<ModifyGuildChannelPositionsPayload>) => Partial<RawModifyGuildChannelPositionsPayload>;
