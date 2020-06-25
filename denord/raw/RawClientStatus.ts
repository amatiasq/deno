export interface RawClientStatus {
	/** the user's status set for an active desktop (Windows, Linux, Mac) application session */
	desktop?: string;
	/** the user's status set for an active mobile (iOS, Android) application session */
	mobile?: string;
	/** the user's status set for an active web (browser, bot account) application session */
	web?: string;
}
