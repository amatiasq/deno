import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { Bot, Intent } from '../denord-bot/mod.ts';

const { MARTI_BOT_ID, MARTI_TOKEN } = config();

const bot = new Bot({
	id: MARTI_BOT_ID,
	token: MARTI_TOKEN,
	names: ['marti'],
	intents: [
		Intent.GUILDS,
		Intent.GUILD_MESSAGES,
		Intent.GUILD_MESSAGE_REACTIONS,
	],
});

bot.middleware(x => {
	x.reply('FOO');
	console.log(x);
	return false;
});

await bot.connect();
