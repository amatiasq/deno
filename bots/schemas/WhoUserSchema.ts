import { UserSchema } from '../../denord-bot/mod.ts';

export interface WhoUserSchema extends UserSchema {
	who: string;
}
