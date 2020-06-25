import { RawActivitySecrets } from '../raw/RawActivitySecrets.ts';


export interface ActivitySecrets {
	/** the secret for joining a party */
	join?: string;
	/** the secret for spectating a game */
	spectate?: string;
	/** the secret for a specific instanced ma */
	match?: string;
}


export function wrapActivitySecrets(x: RawActivitySecrets): ActivitySecrets {
	return x;
}

export function unwrapActivitySecrets(x: ActivitySecrets): RawActivitySecrets {
	return x;
}

export const wrapActivitySecretsPartial = wrapActivitySecrets as (x: Partial<RawActivitySecrets>) => Partial<ActivitySecrets>;

export const unwrapActivitySecretsPartial = unwrapActivitySecrets as (x: Partial<ActivitySecrets>) => Partial<RawActivitySecrets>;
