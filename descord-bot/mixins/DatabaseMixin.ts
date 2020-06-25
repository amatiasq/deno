import { Bot, BotOptions } from '../Bot.ts';
import { Apply } from '../mixin.ts';
import { Database } from '../mongodb.ts';

export type DatabaseMixin = ReturnType<typeof databaseMixin>;

export interface UserSchema {
	id: string;
	nick?: string;
}

export interface DatabaseMixinOptions extends BotOptions {
	db: Database;
}

export function databaseMixin(parent: Apply<typeof Bot>) {
	return class DatabaseMixin extends parent {
		get db() {
			return this.options.db;
		}

		protected readonly users = this.db.collection<UserSchema>('users');
		protected readonly memory = this.db.simple('memory');

		constructor(protected readonly options: DatabaseMixinOptions) {
			super(options);
		}

		async getUser<T extends UserSchema>(
			id: string,
		): Promise<T & { save(): Promise<void> }> {
			const col = this.users;
			const result =
				(await col.col.findOne({ id })) || (await col.col.insertOne({ id }));

			const { _id, ...user } = result;

			return {
				...(user as T),
				save() {
					return col.col.updateOne({ id }, this) as Promise<never>;
				},
			};
		}
	};
}
