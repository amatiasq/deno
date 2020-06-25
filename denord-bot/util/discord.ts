import { ExtendedUser } from '../discord/User.ts';

export function mention(user: ExtendedUser) {
	return String(user).replace(/^<@([^!])/, '<@!$1');
}
