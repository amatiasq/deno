import { Applied } from '../amq/code/mixin.ts';
import { Bot } from '../denord-bot/Bot.ts';
import { DatabaseMixin } from '../denord-bot/mixins/DatabaseMixin.ts';
import { IgnoreMixin } from '../denord-bot/mixins/IgnoreMixin.ts';
import { NicksMixin } from '../denord-bot/mixins/NicksMixin.ts';
import algunMensajePara from './commands/algun-mensaje-para.ts';
import ayuda from './commands/ayuda.ts';
import dileA from './commands/dile-a.ts';
import encuesta from './commands/encuesta.ts';
import ignoraA from './commands/ignora-a.ts';
import quienEs from './commands/quien-es.ts';
import nicknames from './middleware/nicknames.ts';
import tell from './middleware/tell.ts';

export function applyCommands(
	bot: Applied<typeof Bot, DatabaseMixin, IgnoreMixin>,
) {
	bot.command('di ', async message => message.channel.send(message.clean));

	bot.alias('help', 'ayuda');
	bot.alias('hay algun mensaje para', 'algun mensaje para');
	bot.command('hola', async message =>
		message.channel.send(`Hola, soy ${bot.name}`),
	);

	bot.command('ignora a', ignoraA);
	bot.command('ayuda', ayuda);
	bot.command('dile a', dileA);
	bot.command('quien es', quienEs);
	bot.command('encuesta', encuesta);
	bot.command('algun mensaje para', algunMensajePara);
}

export function applyMiddleware(
	bot: Applied<typeof Bot, DatabaseMixin, NicksMixin>,
) {
	bot.middleware(nicknames);
	bot.middleware(tell);
}
