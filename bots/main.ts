import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { connectDiscord, DiscordEvent, Intent } from '../descord/mod.ts';

const { MARTI_BOT_ID, MARTI_TOKEN } = config();

const client = await connectDiscord(MARTI_BOT_ID, MARTI_TOKEN, [
	Intent.GUILDS,
	Intent.GUILD_MESSAGES,
	Intent.GUILD_MESSAGE_REACTIONS,
]);

// client.onMessage(x => {
// 	if (x.op === GatewayOpCode.Dispatch) {
// 		console.log(x.t, x.d);
// 	}
// });

client.onDispatch(DiscordEvent.MESSAGE_CREATE, x => {
	if (x.author.id === MARTI_BOT_ID) {
		return;
	}

	client.api.createMessage(x.channelId, {
		content: 'potat',
	});
});

console.log('READY');
