import { RawVoiceRegion } from '../raw/RawVoiceRegion.ts';
import { VoiceRegionId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure

export interface VoiceRegion {
	/** unique ID for the region */
	id: VoiceRegionId;
	/** name of the region */
	name: string;
	/** true if this is a vip-only server */
	vip: boolean;
	/** true for a single server that is closest to the current user's client */
	optimal: boolean;
	/** whether this is a deprecated voice region (avoid switching to these) */
	deprecated: boolean;
	/** whether this is a custom voice region (used for events/etc) */
	custom: boolean;
}


export function wrapVoiceRegion(x: RawVoiceRegion): VoiceRegion {
	return x;
}

export function unwrapVoiceRegion(x: VoiceRegion): RawVoiceRegion {
	return x;
}

export const wrapVoiceRegionPartial = wrapVoiceRegion as (x: Partial<RawVoiceRegion>) => Partial<VoiceRegion>;

export const unwrapVoiceRegionPartial = unwrapVoiceRegion as (x: Partial<VoiceRegion>) => Partial<RawVoiceRegion>;
