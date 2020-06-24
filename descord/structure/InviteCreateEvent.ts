import { RawInviteCreateEvent } from '../raw/RawInviteCreateEvent.ts';
import {
	ChannelId,
	GuildId,
	integer,
	InviteCode,
	parseISO8601Timestamp, unparseISO8601Timestamp,
} from '../internals/type-aliases.ts';
import { User, wrapUser, wrapUserPartial, unwrapUser, unwrapUserPartial } from './User.ts';

export interface InviteCreateEvent {
	/** the channel the invite is for */
	channelId: ChannelId;
	/** the unique invite code */
	code: InviteCode;
	/** the time at which the invite was created */
	createdAt: Date;
	/** the guild of the invite */
	guildId?: GuildId;
	/** the user that created the invite */
	inviter?: User;
	/** how long the invite is valid for (in seconds) */
	maxAge: integer;
	/** the maximum number of times the invite can be used */
	maxUses: integer;
	/** the target user for this invite */
	targetUser?: Partial<User>;
	/** the type of user target for this invite */
	targetUserType?: integer;
	/** whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role) */
	temporary: boolean;
	/** how many times the invite has been used (always will be 0) */
	uses: integer;
}


export function wrapInviteCreateEvent(x: RawInviteCreateEvent): InviteCreateEvent {
	return {
		...x,
		channelId: x.channel_id,
		createdAt: parseISO8601Timestamp(x.created_at),
		guildId: x.guild_id && x.guild_id,
		inviter: x.inviter && wrapUser(x.inviter),
		maxAge: x.max_age,
		maxUses: x.max_uses,
		targetUser: x.target_user && wrapUserPartial(x.target_user),
		targetUserType: x.target_user_type && x.target_user_type,
	};
}

export function unwrapInviteCreateEvent(x: InviteCreateEvent): RawInviteCreateEvent {
	return {
		...x,
		channel_id: x.channelId,
		created_at: unparseISO8601Timestamp(x.createdAt),
		guild_id: x.guildId && x.guildId,
		inviter: x.inviter && unwrapUser(x.inviter),
		max_age: x.maxAge,
		max_uses: x.maxUses,
		target_user: x.targetUser && unwrapUserPartial(x.targetUser),
		target_user_type: x.targetUserType && x.targetUserType,
	};
}

export function wrapInviteCreateEventPartial(x: Partial<RawInviteCreateEvent>): Partial<InviteCreateEvent> {
	return {
		...x,
		channelId: x.channel_id && x.channel_id,
		createdAt: x.created_at && parseISO8601Timestamp(x.created_at),
		guildId: x.guild_id && x.guild_id,
		inviter: x.inviter && wrapUser(x.inviter),
		maxAge: x.max_age && x.max_age,
		maxUses: x.max_uses && x.max_uses,
		targetUser: x.target_user && wrapUserPartial(x.target_user),
		targetUserType: x.target_user_type && x.target_user_type,
	};
}

export function unwrapInviteCreateEventPartial(x: Partial<InviteCreateEvent>): Partial<RawInviteCreateEvent> {
	return {
		...x,
		channel_id: x.channelId && x.channelId,
		created_at: x.createdAt && unparseISO8601Timestamp(x.createdAt),
		guild_id: x.guildId && x.guildId,
		inviter: x.inviter && unwrapUser(x.inviter),
		max_age: x.maxAge && x.maxAge,
		max_uses: x.maxUses && x.maxUses,
		target_user: x.targetUser && unwrapUserPartial(x.targetUser),
		target_user_type: x.targetUserType && x.targetUserType,
	};
}
