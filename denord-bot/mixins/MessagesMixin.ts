import { Message } from '../../denord/mod.ts';
import { Bot, BotOptions } from '../Bot.ts';
import { BotMessage } from '../structure/Message.ts';
import { randomItem } from '../../amq/array.ts';

export type MessagesMixin = ReturnType<typeof messagesMixin>;

export interface MessagesMixinOptions extends BotOptions {
	messages: {
		[index: string]: string | string[];
	};
}

export function messagesMixin(parent: typeof Bot) {
	return class MessagesMixin extends parent {
		get messages() {
			return this.options.messages;
		}

		constructor(protected readonly options: MessagesMixinOptions) {
			super(options);
		}

		async hear(message: BotMessage): Promise<boolean | Message> {
			const result = await super.hear(message);

			if (result || message.author.bot || !message.isMentioned) {
				return result;
			}

			const fallback = this.message('FALLBACK');
			this.log('FALLBACK(TEXT)', fallback);
			return message.reply(fallback);
		}

		message(label: string) {
			const value = this.messages[label];
			return Array.isArray(value) ? randomItem(value) : value;
		}
	};
}
