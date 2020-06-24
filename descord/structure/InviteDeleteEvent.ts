import { RawInviteDeleteEvent } from '../raw/RawInviteDeleteEvent.ts';
import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface InviteDeleteEvent {
	/** the channel of the invite */
	channelId: ChannelId;
	/** the guild of the invite */
	guildId?: GuildId;
	/** the unique invite code */
	code: string;
}


export function wrapInviteDeleteEvent(x: RawInviteDeleteEvent): InviteDeleteEvent {
	return {
		...x,
		channelId: x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapInviteDeleteEvent(x: InviteDeleteEvent): RawInviteDeleteEvent {
	return {
		...x,
		channel_id: x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}

export function wrapInviteDeleteEventPartial(x: Partial<RawInviteDeleteEvent>): Partial<InviteDeleteEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapInviteDeleteEventPartial(x: Partial<InviteDeleteEvent>): Partial<RawInviteDeleteEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		guild_id: x.guildId && x.guildId,
	};
}
