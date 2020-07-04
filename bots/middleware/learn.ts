import { Applied } from '../../amq/code/mixin.ts';
import { normalize } from '../../amq/string.ts';
import { DatabaseMixin } from '../../denord-bot/mixins/DatabaseMixin.ts';
import { Bot, BotMessage, splitWords } from '../../denord-bot/mod.ts';
import { WhoUserSchema } from '../schemas/WhoUserSchema.ts';

export default async function learn(
	message: BotMessage,
	bot: Applied<typeof Bot, DatabaseMixin>,
) {
	if (!message.isMentioned) {
		console.log('not mentioned');
		return false;
	}

	let name;
	const words = splitWords(normalize(message.clean));

	if (words[0] === 'soy') {
		console.log('soy');
		name = String(message.author);

		if (words[1] === 'tu') {
			words[1] = 'mi';
		}
	}

	if (words[1] === 'es' && normalize(words[0]) !== 'quien') {
		console.log('es');
		name = words[0];
	}

	if (!name) {
		return false;
	}

	await bot;

	const user = await bot.getUser<WhoUserSchema>(name);
	user.who = words.slice(1).join(' ');
	await user.save();

	await message.reply('Vale! Me lo apunto para el examen.');
	return true;
}
