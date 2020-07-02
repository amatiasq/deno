import { TellUserSchema } from '../schemas/TellUserSchema.ts';
import { Applied } from '../../amq/code/mixin.ts';
import {
	DatabaseMixin,
	Bot,
	BotMessage,
	removeStart,
} from '../../denord-bot/mod.ts';

export default async function (
	message: BotMessage,
	bot: Applied<typeof Bot, DatabaseMixin>,
) {
	const mention = message.firstMention;

	if (!mention) {
		return;
	}

	const user = await bot.getUser<TellUserSchema>(mention.id);
	const entry = {
		author: message.author.toString(),
		text: removeStart(message.clean, String(mention)),

		// text: removeStart(
		// 	removeStart(text, String(mention.user)),
		// 	mentionUser(mention.user),
		// ),
	};

	if (!user.tell) {
		user.tell = [entry];
	} else {
		user.tell.push(entry);
	}

	await user.save();
	return message.reply(`ok, si veo a ${mention} se lo diré`);
}
