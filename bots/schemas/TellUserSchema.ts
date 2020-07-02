import { UserSchema } from '../../denord-bot/mod.ts';

export interface TellUserSchema extends UserSchema {
	tell: Array<{ author: string; text: string }>;
}
