// import './bots/Marti.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { connectDiscord, Intent, GatewayOpCode } from '../descord/mod.ts';

const env = config();

const client = await connectDiscord('718001826200420415', env.MARTI_TOKEN, [
	Intent.GUILDS,
	Intent.GUILD_MESSAGES,
	Intent.GUILD_MESSAGE_REACTIONS,
]);

client.onMessage(x => {
	if (x.op === GatewayOpCode.Dispatch) {
		console.log(x.t, x.d);
	}
});
