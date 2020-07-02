import { TellUserSchema } from './../schemas/TellUserSchema.ts';
import { Applied } from '../../amq/code/mixin.ts';
import { Bot, DatabaseMixin, BotMessage } from '../../denord-bot/mod.ts';

export default async function (
	message: BotMessage,
	bot: Applied<typeof Bot, DatabaseMixin>,
) {
	const target = message.firstMention;

	if (!target) {
		return message.reply('Para quién?');
	}

	const { tell } = await bot.getUser<TellUserSchema>(String(target));

	if (!tell || !tell.length) {
		return message.reply('No, nada');
	}

	if (tell.length === 1) {
		const [{ author, text }] = tell;
		return message.reply(`hay un mensaje de ${author}: ${text}`);
	}

	const list = tell
		.map(({ author, text }) => ` - de ${author}: ${text}`)
		.join('\n');

	return message.reply(`hay varios mensajes:\n${list}`);
}
