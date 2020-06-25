import { RawInviteDeleteEvent } from '../raw/RawInviteDeleteEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { ChannelId, GuildId } from '../internals/type-aliases.ts';

export interface InviteDeleteEvent {
	/** the channel of the invite */
	channelId: ChannelId;
	/** the guild of the invite */
	guildId?: GuildId;
	/** the unique invite code */
	code: string;
}


export const wrapInviteDeleteEvent = fromApiCasing as (x: RawInviteDeleteEvent) => InviteDeleteEvent;

export const unwrapInviteDeleteEvent = toApiCasing as (x: InviteDeleteEvent) => RawInviteDeleteEvent;

export const wrapInviteDeleteEventPartial = wrapInviteDeleteEvent as (x: Partial<RawInviteDeleteEvent>) => Partial<InviteDeleteEvent>;

export const unwrapInviteDeleteEventPartial = unwrapInviteDeleteEvent as (x: Partial<InviteDeleteEvent>) => Partial<RawInviteDeleteEvent>;
