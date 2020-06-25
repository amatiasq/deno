import { Bot } from '../Bot.ts';
import { Apply } from '../mixin.ts';
import { randomItem } from '../util/array.ts';
import { DatabaseMixin } from './DatabaseMixin.ts';

type LearnType = string;

interface LearnSchema {
	id: string;
	type: LearnType;
	nick: string;
	text: string;
}

export type LearnMixin = ReturnType<typeof learnMixin>;

export function learnMixin(parent: Apply<typeof Bot, DatabaseMixin>) {
	return class LearnMixin extends parent {
		protected readonly _learn = this.db.collection<LearnSchema>('learn');

		async learn(type: LearnType, nick: string, text: string) {
			this._learn.push({ type, text, nick });
		}

		async getLearnt(type: LearnType, index: number | null = null) {
			const list = await this._learn.find({ type });
			const result = index == null ? randomItem(list) : list[index];
			return `${result.text} (by ${result.nick})`;
		}

		async count(type: LearnType) {
			const list = await this._learn.find({ type });
			return list.length;
		}
	};
}
