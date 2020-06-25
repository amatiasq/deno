import { ChannelId, integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions-json-params

export interface RawModifyGuildChannelPositionsPayload {
	/** channel id */
	id: ChannelId;
	/** sorting position of the channel */
	position?: integer;
}
