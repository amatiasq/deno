import { User } from '../../denord/mod.ts';
import { Bot } from '../Bot.ts';
import { Apply } from '../../amq/code/mixin.ts';
import { Collection } from '../mongodb.ts';
import { BotMessage } from '../structure/Message.ts';
import { DatabaseMixin, UserSchema } from './DatabaseMixin.ts';

export type IgnoreMixin = ReturnType<typeof ignoreMixin>;

export interface IgnorableUserSchema extends UserSchema {
	ignore?: boolean;
}

export function ignoreMixin(parent: Apply<typeof Bot, DatabaseMixin>) {
	return class IgnoreMixin extends parent {
		private readonly ignoreCache = new Map<string, boolean>();
		protected readonly users!: Collection<IgnorableUserSchema>;

		async ignore({ id }: User) {
			const user = await this.getUser<IgnorableUserSchema>(id);
			// const wasIgnoring = user.ignore;

			user.ignore = !user.ignore;
			this.ignoreCache.set(user.id, user.ignore);

			console.log(user);

			await this.users.save(user);
			return user.ignore;
		}

		async isIgnoring({ id }: User) {
			if (!this.ignoreCache.has(id)) {
				const user = await this.getUser<IgnorableUserSchema>(id);
				this.ignoreCache.set(id, user.ignore || false);
			}

			return Boolean(this.ignoreCache.get(id));
		}

		async hear(message: BotMessage) {
			if (await this.isIgnoring(message.author)) {
				return false;
			}

			return super.hear(message);
		}
	};
}
