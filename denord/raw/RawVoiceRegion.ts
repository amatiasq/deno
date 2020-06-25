import { VoiceRegionId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure

export interface RawVoiceRegion {
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
