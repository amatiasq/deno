import { Bot } from '../Bot.ts';
import { Apply } from '../../amq/code/mixin.ts';
import { DatabaseMixin } from './DatabaseMixin.ts';
import { User } from '../../denord/structure/User.ts';

const MILLISECONDS_IN_SECONDS = 1000;
const SECONDS_IN_MINUTES = 60;
const MINUTES_IN_HOURS = 60;
const HOURS_IN_DAY = 24;

export type PointType = string;

interface PointsSchema {
	id: string;
	user: string;
	type: string;
	points: number;
}

export type PointsMixin = ReturnType<typeof pointsMixin>;

export function pointsMixin(parent: Apply<typeof Bot, DatabaseMixin>) {
	return class PointsMixin extends parent {
		protected readonly points = this.db.collection<PointsSchema>('points');

		async addPoints(type: PointType, user: string, points: number) {
			const updateResult = await this.points.col.updateOne(
				{ type, user },
				{ $inc: { points } },
			);

			if (!updateResult.modifiedCount) {
				await this.points.col.insertOne({ type, user, points });
			}
		}

		async getBoard(type: PointType) {
			return await this.points.col.aggregate([
				{ $match: { type } },
				{ $sort: { points: -1 } },
				{ $limit: 5 },
				{ $project: { _id: 0, user: 1, points: 1 } },
			]);
		}

		async getPoints(type: PointType, user: User) {
			const entry = await this.points.col.findOne({
				type,
				user: user.id,
			});
			return entry ? entry.points : 0;
		}

		async lowerPoints(type: PointType, operator: number) {
			const key = `points-${type}-lower`;
			const stored = parseInt(await this.memory.get(key), 10);
			const now = new Date();
			const lastLower = new Date(stored || 0);
			const diff = Math.round(
				(Number(now) - Number(lastLower)) /
					MILLISECONDS_IN_SECONDS /
					SECONDS_IN_MINUTES /
					MINUTES_IN_HOURS,
			);

			if (diff < HOURS_IN_DAY) {
				return HOURS_IN_DAY - diff;
			}

			await this.points.col.updateMany(
				{ type },
				{ $mul: { points: 1 - operator } },
			);

			this.memory.set(key, String(now));
		}

		async reset(type: PointType, userId: string) {
			return this.points.col.updateOne(
				{ type, user: userId },
				{ $set: { points: 0 } },
			);
		}
	};
}
