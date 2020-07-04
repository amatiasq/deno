export enum RpcErrorCode {
	/** An unknown error occurred. */
	UNKNOWN_ERROR = 1000,
	/** You sent an invalid payload. */
	INVALID_PAYLOAD = 4000,
	/** Invalid command name specified. */
	INVALID_COMMAND = 4002,
	/** Invalid guild ID specified. */
	INVALID_GUILD = 4003,
	/** Invalid event name specified. */
	INVALID_EVENT = 4004,
	/** Invalid channel ID specified. */
	INVALID_CHANNEL = 4005,
	/** You lack permissions to access the given resource. */
	INVALID_PERMISSIONS = 4006,
	/** An invalid OAuth2 application ID was used to authorize or authenticate with. */
	INVALID_CLIENT_ID = 4007,
	/** An invalid OAuth2 application origin was used to authorize or authenticate with. */
	INVALID_ORIGIN = 4008,
	/** An invalid OAuth2 token was used to authorize or authenticate with. */
	INVALID_TOKEN = 4009,
	/** The specified user ID was invalid. */
	INVALID_USER = 4010,
	/** A standard OAuth2 error occurred; check the data object for the OAuth2 error details. */
	OAUTH2_ERROR = 5000,
	/** An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out. */
	SELECT_CHANNEL_TIMED_OUT = 5001,
	/** An asynchronous GET_GUILD command timed out. */
	GET_GUILD_TIMED_OUT = 5002,
	/** You tried to join a user to a voice channel but the user was already in one. */
	SELECT_VOICE_FORCE_REQUIRED = 5003,
	/** You tried to capture more than one shortcut key at once. */
	CAPTURE_SHORTCUT_ALREADY_LISTENING = 5004,
}
