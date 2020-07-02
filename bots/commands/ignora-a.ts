import { Applied } from '../../amq/code/mixin.ts';
import { Bot, IgnoreMixin, BotMessage } from '../../denord-bot/mod.ts';

const gods = ['326474946996076556', '370218583675895809'];

export default async function (
	message: BotMessage,
	bot: Applied<typeof Bot, IgnoreMixin>,
) {
	if (!gods.includes(String(message.author.id))) {
		return;
	}

	const target = message.firstMention;

	if (!target) {
		return;
	}

	const isIgnoring = await bot.ignore(target);
	return message.reply(isIgnoring ? 'eso está hecho' : 'vale, le haré caso');
}
