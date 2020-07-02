import { randomItem } from '../../amq/array.ts';
import { Applied } from '../../amq/code/mixin.ts';
import { normalize } from '../../amq/string.ts';
import {
	Bot,
	BotMessage,
	DatabaseMixin,
	splitWords,
	trim,
	UserSchema,
} from '../../denord-bot/mod.ts';

interface WhoUserSchema extends UserSchema {
	who: string;
}

const FALLBACKS = [
	'Quién?',
	'Ni puta idea',
	'Y yo que se',
	'A mi que me preguntas',
	'Tengo cara de ser tu asistente?',
];

export default async function (
	message: BotMessage,
	bot: Applied<typeof Bot, DatabaseMixin>,
) {
	const target = splitWords(trim(normalize(message.clean)))[0];
	const user = await bot.getUser<WhoUserSchema>(target);
	return message.reply(user.who || randomItem(FALLBACKS));
}
