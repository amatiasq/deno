import { GuildId } from '../internals/type-aliases.ts';

export interface RawVoiceServerUpdateEvent {
	/** voice connection token */
	token: string;
	/** the guild this voice server update is for */
	guild_id: GuildId;
	/** the voice server host */
	endpoint: string;
}
