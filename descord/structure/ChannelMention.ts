import { RawChannelMention } from '../raw/RawChannelMention.ts';
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


export function wrapChannelMention(x: RawChannelMention): ChannelMention {
	return {
		...x,
		guildId: x.guild_id,
	};
}

export function unwrapChannelMention(x: ChannelMention): RawChannelMention {
	return {
		...x,
		guild_id: x.guildId,
	};
}

export function wrapChannelMentionPartial(x: Partial<RawChannelMention>): Partial<ChannelMention> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapChannelMentionPartial(x: Partial<ChannelMention>): Partial<RawChannelMention> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
	};
}
