import { RawVoiceServerUpdateEvent } from '../raw/RawVoiceServerUpdateEvent.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';
import { GuildId } from '../internals/type-aliases.ts';

export interface VoiceServerUpdateEvent {
	/** voice connection token */
	token: string;
	/** the guild this voice server update is for */
	guildId: GuildId;
	/** the voice server host */
	endpoint: string;
}


export const wrapVoiceServerUpdateEvent = fromApiCasing as (x: RawVoiceServerUpdateEvent) => VoiceServerUpdateEvent;

export const unwrapVoiceServerUpdateEvent = toApiCasing as (x: VoiceServerUpdateEvent) => RawVoiceServerUpdateEvent;

export const wrapVoiceServerUpdateEventPartial = wrapVoiceServerUpdateEvent as (x: Partial<RawVoiceServerUpdateEvent>) => Partial<VoiceServerUpdateEvent>;

export const unwrapVoiceServerUpdateEventPartial = unwrapVoiceServerUpdateEvent as (x: Partial<VoiceServerUpdateEvent>) => Partial<RawVoiceServerUpdateEvent>;
