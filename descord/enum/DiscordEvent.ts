export enum DiscordEvent {
	/** defines the heartbeat interval */
	HELLO = 'HELLO',
	/** contains the initial state information */
	READY = 'READY',
	/** response to Resume */
	RESUMED = 'RESUMED',
	/** server is going away, client should reconnect to gateway and resume */
	RECONNECT = 'RECONNECT',
	/** failure response to Identify or Resume or invalid active session */
	INVALID_SESSION = 'INVALID_SESSION',
	/** new channel created */
	CHANNEL_CREATE = 'CHANNEL_CREATE',
	/** channel was updated */
	CHANNEL_UPDATE = 'CHANNEL_UPDATE',
	/** channel was deleted */
	CHANNEL_DELETE = 'CHANNEL_DELETE',
	/** message was pinned or unpinned */
	CHANNEL_PINS_UPDATE = 'CHANNEL_PINS_UPDATE',
	/** lazy-load for unavailable guild, guild became available, or user joined a new guild */
	GUILD_CREATE = 'GUILD_CREATE',
	/** guild was updated */
	GUILD_UPDATE = 'GUILD_UPDATE',
	/** guild became unavailable, or user left/was removed from a guild */
	GUILD_DELETE = 'GUILD_DELETE',
	/** user was banned from a guild */
	GUILD_BAN_ADD = 'GUILD_BAN_ADD',
	/** user was unbanned from a guild */
	GUILD_BAN_REMOVE = 'GUILD_BAN_REMOVE',
	/** guild emojis were updated */
	GUILD_EMOJIS_UPDATE = 'GUILD_EMOJIS_UPDATE',
	/** guild integration was updated */
	GUILD_INTEGRATIONS_UPDATE = 'GUILD_INTEGRATIONS_UPDATE',
	/** new user joined a guild */
	GUILD_MEMBER_ADD = 'GUILD_MEMBER_ADD',
	/** user was removed from a guild */
	GUILD_MEMBER_REMOVE = 'GUILD_MEMBER_REMOVE',
	/** guild member was updated */
	GUILD_MEMBER_UPDATE = 'GUILD_MEMBER_UPDATE',
	/** response to Request Guild Members */
	GUILD_MEMBERS_CHUNK = 'GUILD_MEMBERS_CHUNK',
	/** guild role was created */
	GUILD_ROLE_CREATE = 'GUILD_ROLE_CREATE',
	/** guild role was updated */
	GUILD_ROLE_UPDATE = 'GUILD_ROLE_UPDATE',
	/** guild role was deleted */
	GUILD_ROLE_DELETE = 'GUILD_ROLE_DELETE',
	/** invite to a channel was created */
	INVITE_CREATE = 'INVITE_CREATE',
	/** invite to a channel was deleted */
	INVITE_DELETE = 'INVITE_DELETE',
	/** message was created */
	MESSAGE_CREATE = 'MESSAGE_CREATE',
	/** message was edited */
	MESSAGE_UPDATE = 'MESSAGE_UPDATE',
	/** message was deleted */
	MESSAGE_DELETE = 'MESSAGE_DELETE',
	/** multiple messages were deleted at once */
	MESSAGE_DELETE_BULK = 'MESSAGE_DELETE_BULK',
	/** user reacted to a message */
	MESSAGE_REACTION_ADD = 'MESSAGE_REACTION_ADD',
	/** user removed a reaction from a message */
	MESSAGE_REACTION_REMOVE = 'MESSAGE_REACTION_REMOVE',
	/** all reactions were explicitly removed from a message */
	MESSAGE_REACTION_REMOVE_ALL = 'MESSAGE_REACTION_REMOVE_ALL',
	/** all reactions for a given emoji were explicitly removed from a message */
	MESSAGE_REACTION_REMOVE_EMOJI = 'MESSAGE_REACTION_REMOVE_EMOJI',
	/** user was updated */
	PRESENCE_UPDATE = 'PRESENCE_UPDATE',
	/** user started typing in a channel */
	TYPING_START = 'TYPING_START',
	/** properties about the user changed */
	USER_UPDATE = 'USER_UPDATE',
	/** someone joined, left, or moved a voice channel */
	VOICE_STATE_UPDATE = 'VOICE_STATE_UPDATE',
	/** guild's voice server was updated */
	VOICE_SERVER_UPDATE = 'VOICE_SERVER_UPDATE',
	/** guild channel webhook was created, update, or deleted */
	WEBHOOKS_UPDATE = 'WEBHOOKS_UPDATE',
}
