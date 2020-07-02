import { Bot, BotMessage, NicksMixin } from '../../denord-bot/mod.ts';
import { Applied } from '../../amq/code/mixin.ts';

export default async function (
	message: BotMessage,
	bot: Applied<typeof Bot, NicksMixin>,
) {
	const nick = message.author.username;
	bot.setNickname(message.author, nick);
	return false;
}
