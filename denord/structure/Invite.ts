import { RawInvite } from '../raw/RawInvite.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { InviteCode, integer } from '../internals/type-aliases.ts';
import { TargetUserType } from '../enum/TargetUserType.ts';
import { Guild, wrapGuild, wrapGuildPartial, unwrapGuild, unwrapGuildPartial } from './Guild.ts';
import { Channel, wrapChannel, wrapChannelPartial, unwrapChannel, unwrapChannelPartial } from './Channel.ts';
import { User, wrapUser, wrapUserPartial, unwrapUser, unwrapUserPartial } from './User.ts';

// https://discord.com/developers/docs/resources/invite#invite-object-invite-structure

export interface Invite {
	/** the invite code (unique ID) */
	code: InviteCode;
	/** the guild this invite is for */
	guild?: Partial<Guild>;
	/** the channel this invite is for */
	channel: Partial<Channel>;
	/** the user who created the invite */
	inviter?: User;
	/** the target user for this invite */
	targetUser?: Partial<User>;
	/** the type of user target for this invite */
	targetUserType?: TargetUserType;
	/** approximate count of online members (only present when targetUser is set) */
	approximatePresenceCount?: integer;
	/** approximate count of total members */
	approximateMemberCount?: integer;
}


export function wrapInvite(x: RawInvite): Invite {
	return {
		...fromApiCasing(x),
		guild: x.guild && wrapGuildPartial(x.guild),
		channel: wrapChannelPartial(x.channel),
		inviter: x.inviter && wrapUser(x.inviter),
		targetUser: x.target_user && wrapUserPartial(x.target_user),
	};
}

export function unwrapInvite(x: Invite): RawInvite {
	return {
		...toApiCasing(x),
		guild: x.guild && unwrapGuildPartial(x.guild),
		channel: unwrapChannelPartial(x.channel),
		inviter: x.inviter && unwrapUser(x.inviter),
		target_user: x.targetUser && unwrapUserPartial(x.targetUser),
	};
}

export function wrapInvitePartial(x: Partial<RawInvite>): Partial<Invite> {
	return {
		...fromApiCasing(x),
		guild: x.guild && wrapGuildPartial(x.guild),
		channel: x.channel && wrapChannelPartial(x.channel),
		inviter: x.inviter && wrapUser(x.inviter),
		targetUser: x.target_user && wrapUserPartial(x.target_user),
	};
}

export function unwrapInvitePartial(x: Partial<Invite>): Partial<RawInvite> {
	return {
		...toApiCasing(x),
		guild: x.guild && unwrapGuildPartial(x.guild),
		channel: x.channel && unwrapChannelPartial(x.channel),
		inviter: x.inviter && unwrapUser(x.inviter),
		target_user: x.targetUser && unwrapUserPartial(x.targetUser),
	};
}
