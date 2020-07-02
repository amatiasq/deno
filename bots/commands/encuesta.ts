import { Applied } from '../../amq/code/mixin.ts';
import { Bot, BotMessage } from '../../denord-bot/mod.ts';

export default async function (message: BotMessage, bot: Applied<typeof Bot>) {
	const poll = await message.channel.send(message.clean);
	const react = (emoji: string) =>
		bot.api?.createReaction(message.channelId, poll.id, emoji);

	await react('✅');
	await react('⛔');
	return true;
}
