export interface RawActivitySecrets {
	/** the secret for joining a party */
	join?: string;
	/** the secret for spectating a game */
	spectate?: string;
	/** the secret for a specific instanced ma */
	match?: string;
}
