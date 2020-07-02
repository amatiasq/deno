import { DiscordClient, Message } from '../../denord/mod.ts';
import { Bot } from '../Bot.ts';
import { remove, trim } from '../util/string.ts';
import { wrapChannel } from './Channel.ts';
import { datetime } from '../../amq/datetime.ts';
import { normalize, containsWord } from '../../amq/string.ts';

type Unpromisify<T> = T extends Promise<infer U> ? U : T;
export type BotMessage = Unpromisify<ReturnType<typeof wrapBotMessage>>;

export async function wrapBotMessage(
	client: DiscordClient,
	message: Message,
	bot: Bot,
) {
	const { author } = message;
	const guild = message.guildId && (await client.getGuild(message.guildId));
	const channel = wrapChannel(
		client,
		await client.getChannel(message.channelId),
	);

	const firstMention = message.mentions.find(x => !bot.is(x));
	const isMentioned = message.mentions.some(x => bot.is(x));
	const clean = clearMessage(message, bot) || normalize(message.content);

	const log = `[${datetime()}, ${guild?.name}#${channel.name}] ${
		author.username
	}: ${message.content}`;

	return {
		...message,
		channel,
		firstMention,
		isMentioned,
		clean,

		reply: (content: string) => channel.send(`${author} ${content}`),

		react: (emoji: string) =>
			client.api.createReaction(message.channelId, message.id, emoji),

		toString: () => log,
	};
}

function clearMessage(message: Message, bot: Bot) {
	const content = normalize(message.content.replace(/<@!/g, '<@'));

	for (const name of bot.names) {
		if (trim(normalize(content)) === name) {
			return content;
		}

		if (containsWord(content, name)) {
			return remove(content, name);
		}
	}

	const botMention = message.mentions.find(mention => bot.is(mention));

	if (botMention) {
		return remove(content, botMention);
	}
}
