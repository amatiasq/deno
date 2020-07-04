import { BotMessage, Bot } from '../../denord-bot/mod.ts';
import { Applied } from '../../amq/code/mixin.ts';
import { containsWord } from '../../amq/string.ts';
import { random } from '../../amq/math.ts';

const BOTS_COUNT = 3;
const CHANCE = 0.5 / BOTS_COUNT + 0.5;
const triggers = ['omg', 'wtf', 'omfg', 'wat'];

export default async function omg(
	message: BotMessage,
	bot: Applied<typeof Bot>,
) {
	const trigger = triggers.some(trigger =>
		containsWord(message.content, trigger),
	);

	const flagged: BotMessage & { omg?: boolean } = message;

	if (!trigger || flagged.omg) {
		return;
	}

	const execute = random(CHANCE);
	bot.log('MIDDLEWARE(OMG)', Boolean(execute));

	if (execute) {
		flagged.omg = true;
		// message.sendImage(bot.randomImage('omg'));
	}
}
