import { padLeft } from '../amq/string.ts';
import { DiscordClient } from '../denord/DiscordClient.ts';
import createClient, {
	DiscordEvent,
	Intent,
	Message,
	User,
} from '../denord/mod.ts';
import { BotMessage, wrapBotMessage } from './structure/Message.ts';
import { logOnce } from './util/log.ts';
import { removeStart, stringish } from './util/string.ts';

const noop = () => {};

export interface BotOptions {
	id: string;
	token: string;
	names: string[];
	intents: Intent[];
	isHearBotEnabled?: boolean;
	isHearSelfEnabled?: boolean;
	unhandled?: (bot: Bot, message: BotMessage) => boolean | void;
}

type Middleware<T extends Bot> = (
	message: BotMessage,
	bot: T,
) => Promise<boolean> | boolean;

type Command<T extends Bot> = (message: BotMessage, bot: T) => Promise<any>;

export class Bot {
	protected readonly _middleware: Array<Middleware<Bot>> = [];
	protected readonly _commands = new Map<string, Command<Bot>>();
	protected readonly _alias = new Map<string, string>();
	private client: DiscordClient | null = null;

	get api() {
		return this.client?.api;
	}

	constructor(protected readonly options: BotOptions) {}

	get id() {
		return this.options.id;
	}

	get isHearBotEnabled() {
		return Boolean(this.options.isHearBotEnabled);
	}

	get isHearSelfEnabled() {
		return Boolean(this.options.isHearSelfEnabled);
	}

	get name() {
		return this.names[0];
	}

	get names() {
		return this.options.names;
	}

	protected get unhandled() {
		return this.options.unhandled || noop;
	}

	is(user: User) {
		return user.id === this.id;
	}

	log(type: string, ...message: stringish[]) {
		const upper = padLeft(this.name.toUpperCase(), 5, ' ');
		console.log(`[${upper}][${type}]`, ...message);
	}

	middleware(handler: Middleware<this>) {
		this._middleware.push(handler as Middleware<Bot>);
	}

	command(key: string, action: Command<this>) {
		this._commands.set(key, action as Command<Bot>);
		this.cleanCommands();
	}

	alias(alias: string, command: string) {
		this._alias.set(alias, command);
		this.cleanCommands();
	}

	private cleanCommands() {
		for (const [command] of this._commands) {
			this._alias.delete(command);
		}
	}

	async connect() {
		this.client = await createClient(
			this.options.id,
			this.options.token,
			this.options.intents,
		);

		this.client.onDispatch(DiscordEvent.READY, () => this.log('Ready!'));
		this.client.onDispatch(DiscordEvent.MESSAGE_CREATE, x =>
			this.onMessage(x),
		);

		return this.client;
	}

	async onMessage(message: Message) {
		const isSelf = this.is(message.author);

		if (!this.isHearSelfEnabled && isSelf) {
			return;
		}

		if (!this.isHearBotEnabled && message.author.bot && !isSelf) {
			return;
		}

		logOnce(`MESSAGE: ${message}`);

		const botMessage = await wrapBotMessage(this.client!, message, this);

		if (botMessage.isMentioned) {
			this.log('HEAR');
		}

		return this.hear(botMessage).catch(error => this.log('ERROR', error));
	}

	async hear(message: BotMessage): Promise<boolean | any> {
		for (const entry of this._middleware) {
			if (await entry(message, this)) {
				this.log('MIDDLEWARE', this._middleware.indexOf(entry));
				return true;
			}
		}

		if (!message.isMentioned) {
			return false;
		}

		if (await this.executeCommand(message)) {
			return true;
		}

		if (!message.author.bot && (await this.unhandled(this, message))) {
			this.log('FALLBACK(HANDLER)');
			return true;
		}

		return false;
	}

	protected executeCommand(message: BotMessage): Promise<boolean> | boolean {
		let content = message.clean;
		let run = null;

		for (const [command, handler] of this._commands) {
			if (content.startsWith(command)) {
				this.log(`COMMAND(${command})`, content);
				content = removeStart(content, command);
				run = handler;
				break;
			}
		}

		if (!run) {
			for (const [alias, command] of this._alias) {
				if (content.startsWith(alias)) {
					this.log(`ALIAS(${alias}=>${command})`, content);
					content = removeStart(content, alias);
					run = this._commands.get(command);
					break;
				}
			}
		}

		if (run) {
			return run(message, this);
		}

		return false;
	}

	help() {
		const aliases = [...this._alias.keys()];
		const commands = [...this._commands.keys()];

		const list = commands.map(command => {
			const alias = aliases.filter(
				alias => this._alias.get(alias) === command,
			);
			return alias.length ? `${command} (${alias.join(', ')})` : command;
		});

		return ` - ${list.join('\n - ')}`;
	}
}
