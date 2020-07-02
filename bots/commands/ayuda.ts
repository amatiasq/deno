import { Bot, BotMessage } from '../../denord-bot/mod.ts';

export default async function (message: BotMessage, bot: Bot) {
	return message.reply(`Puedes decir:\n${bot.help()}`);
}
