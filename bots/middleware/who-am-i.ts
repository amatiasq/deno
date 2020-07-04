import { BotMessage, Bot, trim } from '../../denord-bot/mod.ts';
import { Applied } from '../../amq/code/mixin.ts';
import { normalize, containsWord } from '../../amq/string.ts';

export default async function (message: BotMessage, bot: Applied<typeof Bot>) {
	const isMentioned = message.isMentioned;
	const text = trim(normalize(message.content));
	const isQuienSoy = text === 'quien soy' || text === 'quien soy?';
	const isInvoked = containsWord(text, 'quien soy');

	if (!isQuienSoy && (!isMentioned || !isInvoked)) {
		return false;
	}

	console.log('fake cmd');

	await bot.executeCommand({
		...message,
		clean: `quien es ${message.author}`,
	});

	return true;
}
