import { RawChannelMention } from '../raw/RawChannelMention.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId } from '../internals/type-aliases.ts';
import { ChannelType } from '../enum/ChannelType.ts';

// https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure

export interface ChannelMention {
	/** id of the channel */
	id: ChannelId;
	/** id of the guild containing the channel */
	guildId: GuildId;
	/** the type of channel */
	type: ChannelType;
	/** the name of the channel */
	name: string;
}


export const wrapChannelMention = fromApiCasing as (x: RawChannelMention) => ChannelMention;

export const unwrapChannelMention = toApiCasing as (x: ChannelMention) => RawChannelMention;

export const wrapChannelMentionPartial = wrapChannelMention as (x: Partial<RawChannelMention>) => Partial<ChannelMention>;

export const unwrapChannelMentionPartial = unwrapChannelMention as (x: Partial<ChannelMention>) => Partial<RawChannelMention>;
