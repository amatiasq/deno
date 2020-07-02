import { User } from '../../denord/structure/User.ts';
import { Bot } from '../Bot.ts';
import { Apply } from '../../amq/code/mixin.ts';
import { BotMessage } from '../structure/Message.ts';
import { randomItem } from '../util/array.ts';
import { random } from '../util/math.ts';
import { DatabaseMixin, DatabaseMixinOptions } from './DatabaseMixin.ts';
import { MessagesMixin, MessagesMixinOptions } from './MessagesMixin.ts';
import { PointsMixin, PointType } from './PointsMixin.ts';

const MILLISECONDS_IN_SECONDS = 1000;
const MAX_ANSWERS = 5;
const MIN_ANSWERS = 3;
const MAX_SECONDS = 20;
const MIN_SECONDS = 4;
const MAX_ADVANTAGE = 1 / 4;

interface TriviaSchema {
	id: string;
	user: string;
	answer: number;
	time: Date;
}

interface Question {
	question: string | string[];
	answer: string | string[];
}

export interface TriviaMixinOptions
	extends DatabaseMixinOptions,
		MessagesMixinOptions {
	MAX_ANSWERS?: number;
	MIN_ANSWERS?: number;
	MAX_SECONDS?: number;
	MIN_SECONDS?: number;
}

export type TriviaMixin = ReturnType<typeof triviaMixin>;

export function triviaMixin(
	parent: Apply<typeof Bot, DatabaseMixin, MessagesMixin, PointsMixin>,
) {
	return class TriviaMixin extends parent {
		protected readonly _trivia = this.db.collection<TriviaSchema>('trivia');

		get MAX_ANSWERS() {
			return this.options.MAX_ANSWERS || MAX_ANSWERS;
		}

		get MIN_ANSWERS() {
			return this.options.MIN_ANSWERS || MIN_ANSWERS;
		}

		get MAX_SECONDS() {
			return this.options.MAX_SECONDS || MAX_SECONDS;
		}

		get MIN_SECONDS() {
			return this.options.MIN_SECONDS || MIN_SECONDS;
		}

		constructor(protected readonly options: TriviaMixinOptions) {
			super(options);
		}

		async trivia(
			message: BotMessage,
			type: PointType,
			list: Question[],
			{
				target = message.author,
				maxAnswers = this.MAX_ANSWERS,
				minAnswers = this.MIN_ANSWERS,
				maxSeconds = this.MAX_SECONDS,
				minSeconds = this.MIN_SECONDS,
			} = {},
		) {
			const { index, question, answer } = this.getTriviaEntry(list);
			const [top1, top2] = await this.getBoard(type);
			const userPoints = await this.getPoints(type, target);

			if (
				top1 &&
				top2 &&
				userPoints === top1.points &&
				top1.points - top2.points > top1.points * MAX_ADVANTAGE
			) {
				await message.reply(this.message('TOO_MANY_POINTS'));
				return null;
			}

			const topPoints = top1 && top1.points > 10 ? top1.points : 10;
			const diff = topPoints - userPoints;
			const seconds =
				diff <= 0
					? minSeconds
					: factor(topPoints, diff, maxSeconds, minSeconds + 1);

			const answerCount = factor(
				topPoints,
				userPoints,
				maxAnswers,
				minAnswers,
			);
			const answers = this.getFakeAnswers(list, answerCount - 1, index);
			const rightAnswerPosition = random(answerCount - 1);

			await this.startTrivia(
				message,
				target,
				rightAnswerPosition + 1,
				seconds,
			);
			answers.splice(rightAnswerPosition, 0, answer);

			return {
				options: answers.map(
					(answer, index) => `${index + 1} - ${answer}`,
				),
				question,
				seconds,
			};
		}

		private async startTrivia(
			message: BotMessage,
			user: User,
			answer: number,
			timeout: number,
		) {
			const id = Math.random();

			this._trivia.col.deleteMany({ user: user.id });
			this._trivia.col.insertOne({
				id,
				user: user.id,
				answer,
				time: new Date(),
			});

			setTimeout(async () => {
				const removed = await this._trivia.col.deleteOne({ user, id });

				if (removed) {
					message.reply(this.message('TRIVIA_TIMEOUT'));
				}
			}, timeout * MILLISECONDS_IN_SECONDS);

			return id;
		}

		private async endTrivia(user: User, id: number) {}

		private getFakeAnswers(
			list: Question[],
			amount: number,
			questionIndex: number,
		) {
			if (list.length - 1 < amount) {
				return list.map(entry => entry.answer).splice(questionIndex, 1);
			}

			const answers: string[] = [];

			while (answers.length < amount) {
				const { index, answer } = this.getTriviaEntry(list);

				if (index !== questionIndex && !answers.includes(answer)) {
					answers.push(answer);
				}
			}

			return answers;
		}

		private getTriviaEntry(list: Question[]) {
			const entry = randomItem(list);
			const index = list.indexOf(entry);
			let { question, answer } = entry;

			if (Array.isArray(question)) {
				question = randomItem(question);
			}

			if (Array.isArray(answer)) {
				answer = randomItem(answer);
			}

			return { index, question, answer };
		}
	};
}

function factor(top: number, current: number, max: number, min: number) {
	if (top === 0) {
		return Math.round(min + (max - min) / 2);
	}

	const diff = max - min;
	const modifier = (diff / top) * current;
	return Math.round(modifier + min);
}
