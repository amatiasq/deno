import { RawVoiceServerUpdateEvent } from '../raw/RawVoiceServerUpdateEvent.ts';
import { GuildId } from '../internals/type-aliases.ts';

export interface VoiceServerUpdateEvent {
	/** voice connection token */
	token: string;
	/** the guild this voice server update is for */
	guildId: GuildId;
	/** the voice server host */
	endpoint: string;
}


export function wrapVoiceServerUpdateEvent(x: RawVoiceServerUpdateEvent): VoiceServerUpdateEvent {
	return {
		...x,
		guildId: x.guild_id,
	};
}

export function unwrapVoiceServerUpdateEvent(x: VoiceServerUpdateEvent): RawVoiceServerUpdateEvent {
	return {
		...x,
		guild_id: x.guildId,
	};
}

export function wrapVoiceServerUpdateEventPartial(x: Partial<RawVoiceServerUpdateEvent>): Partial<VoiceServerUpdateEvent> {
	return {
		...x,
		guildId: x.guild_id && x.guild_id,
	};
}

export function unwrapVoiceServerUpdateEventPartial(x: Partial<VoiceServerUpdateEvent>): Partial<RawVoiceServerUpdateEvent> {
	return {
		...x,
		guild_id: x.guildId && x.guildId,
	};
}
