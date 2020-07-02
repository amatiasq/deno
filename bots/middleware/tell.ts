import { TellUserSchema } from './../schemas/TellUserSchema.ts';
import { Applied } from '../../amq/code/mixin.ts';
import { Bot, DatabaseMixin, BotMessage } from '../../denord-bot/mod.ts';

export default async function (
	message: BotMessage,
	bot: Applied<typeof Bot, DatabaseMixin>,
) {
	const user = await bot.getUser<TellUserSchema>(message.author.id);
	const { tell } = user;

	if (!tell || !tell.length) {
		return false;
	}

	if (tell.length === 1) {
		const [{ author, text }] = tell;
		await message.reply(`hay una carta para ti de ${author}: ${text}`);
	} else {
		const response = tell
			.map(({ author, text }) => ` - de ${author}: ${text}`)
			.join('\n');

		await message.reply(`hay varias cartas para ti:\n${response}`);
	}

	user.tell = [];
	user.save();
	return false;
}
