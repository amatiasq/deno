import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { connectMongo } from '../denord-bot/mongodb.ts';
import { applyCommands, applyMiddleware } from './util.ts';
import { Intent } from '../denord/mod.ts';
import { MartiBot } from './Marti.ts';

const { MARTI_BOT_ID, MARTI_TOKEN, MONGODB_URI } = config();

const marti = new MartiBot({
	id: MARTI_BOT_ID,
	token: MARTI_TOKEN,
	names: ['marti'],
	isHearSelfEnabled: false,
	isHearBotEnabled: true,

	intents: [
		Intent.GUILDS,
		Intent.GUILD_MESSAGES,
		Intent.GUILD_MESSAGE_REACTIONS,
	],

	db: connectMongo(MONGODB_URI),

	messages: {
		FALLBACK: 'HOLA',
	},

	unhandled(bot, message) {
		bot.log(`UNHANDLED`, message.clean);
	},
});

applyMiddleware(marti);
applyCommands(marti);

marti.connect();
