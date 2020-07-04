import { Applied } from '../../amq/code/mixin.ts';
import { wait } from '../../amq/promise.ts';
import { Bot, BotMessage } from '../../denord-bot/mod.ts';

export default async function (message: BotMessage, bot: Applied<typeof Bot>) {
	const poll = await message.channel.send(message.clean || 'Si o no?');
	const react = (emoji: string) =>
		bot.api?.createReaction(message.channelId, poll.id, emoji);

	await react('✅');
	wait(1);
	await react('⛔');
	return true;
}
