import { Bot } from '../denord-bot/Bot.ts';
import { mixin } from '../amq/code/mixin.ts';
import {
	databaseMixin,
	ignoreMixin,
	learnMixin,
	messagesMixin,
	nicksMixin,
	pointsMixin,
	triviaMixin,
} from '../denord-bot/mod.ts';

export const MartiBot = mixin(Bot, [
	databaseMixin,
	messagesMixin,
	ignoreMixin,
	nicksMixin,
	learnMixin,
	pointsMixin,
	triviaMixin,
]);
