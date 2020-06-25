import { InviteCode, integer } from '../internals/type-aliases.ts';
import { TargetUserType } from '../enum/TargetUserType.ts';
import { RawGuild } from './RawGuild.ts';
import { RawChannel } from './RawChannel.ts';
import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/invite#invite-object-invite-structure

export interface RawInvite {
	/** the invite code (unique ID) */
	code: InviteCode;
	/** the guild this invite is for */
	guild?: Partial<RawGuild>;
	/** the channel this invite is for */
	channel: Partial<RawChannel>;
	/** the user who created the invite */
	inviter?: RawUser;
	/** the target user for this invite */
	target_user?: Partial<RawUser>;
	/** the type of user target for this invite */
	target_user_type?: TargetUserType;
	/** approximate count of online members (only present when target_user is set) */
	approximate_presence_count?: integer;
	/** approximate count of total members */
	approximate_member_count?: integer;
}
