// https://discord.com/developers/docs/resources/guild#guild-object-guild-features

export enum GuildFeature {
	/** guild has access to set an invite splash background */
	INVITE_SPLASH = 'INVITE_SPLASH',
	/** guild has access to set 384kbps bitrate in voice (previously VIP voice servers) */
	VIP_REGIONS = 'VIP_REGIONS',
	/** guild has access to set a vanity URL */
	VANITY_URL = 'VANITY_URL',
	/** guild is verified */
	VERIFIED = 'VERIFIED',
	/** guild is partnered */
	PARTNERED = 'PARTNERED',
	/** guild is public */
	PUBLIC = 'PUBLIC',
	/** guild has access to use commerce features (i.e. create store channels) */
	COMMERCE = 'COMMERCE',
	/** guild has access to create news channels */
	NEWS = 'NEWS',
	/** guild is able to be discovered in the directory */
	DISCOVERABLE = 'DISCOVERABLE',
	/** guild is able to be featured in the directory */
	FEATURABLE = 'FEATURABLE',
	/** guild has access to set an animated guild icon */
	ANIMATED_ICON = 'ANIMATED_ICON',
	/** guild has access to set a guild banner image */
	BANNER = 'BANNER',
	/** guild cannot be public */
	PUBLIC_DISABLED = 'PUBLIC_DISABLED',
	/** guild has enabled the welcome screen */
	WELCOME_SCREEN_ENABLED = 'WELCOME_SCREEN_ENABLED',
}
