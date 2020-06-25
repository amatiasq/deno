import { Bot } from '../Bot.ts';
import { ExtendedUser } from '../discord/User.ts';
import { Apply } from '../mixin.ts';
import { DatabaseMixin } from './DatabaseMixin.ts';

export type NicksMixin = ReturnType<typeof nicksMixin>;

export function nicksMixin(parent: Apply<typeof Bot, DatabaseMixin>) {
	return class NicksMixin extends parent {
		protected readonly nickCache = new Map<string, string>();

		async softMention(user: ExtendedUser) {
			if (!this.nickCache.has(user.toString())) {
				const stored = await this.users.get(user.id);

				if (stored && stored.nick) {
					this.nickCache.set(user.id, stored.nick);
				}
			}

			return this.nickCache.get(user.id) || user;
		}

		async setNickname(user: ExtendedUser, nick: string) {
			const stored = this.nickCache.get(user.toString());

			if (stored === nick) {
				return false;
			}

			await this.users.save({ id: user.id, nick });
			this.nickCache.set(user.id, nick);
			this.log('NICKNAMES', `${user} is "${nick}"`);
			return true;
		}
	};
}
