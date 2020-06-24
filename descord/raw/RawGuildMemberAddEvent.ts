import { GuildId } from '../internals/type-aliases.ts';
import { RawGuildMember } from './RawGuildMember.ts';

export interface RawGuildMemberAddEvent extends RawGuildMember {
	/** id of the guild */
	guild_id: GuildId;
}
