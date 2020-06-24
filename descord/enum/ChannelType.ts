// https://discord.com/developers/docs/resources/channel#channel-object-channel-types

export enum ChannelType {
	/** a text channel within a server */
	GUILD_TEXT = 0,
	/** a direct message between users */
	DM = 1,
	/** a voice channel within a server */
	GUILD_VOICE = 2,
	/** a direct message between multiple users */
	GROUP_DM = 3,
	/** an organizational category that contains up to 50 channels */
	GUILD_CATEGORY = 4,
	/** a channel that users can follow and crosspost into their own server */
	GUILD_NEWS = 5,
	/** a channel in which game developers can sell their game on Discord */
	GUILD_STORE = 6,
}
