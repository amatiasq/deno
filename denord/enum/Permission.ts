export enum Permission {
	/** Allows creation of instant invites (channel types: T, V) */
	CREATE_INSTANT_INVITE = 0x00000001,
	/** Allows kicking members (require two-factor auth) */
	KICK_MEMBERS = 0x00000002,
	/** Allows banning members (require two-factor auth) */
	BAN_MEMBERS = 0x00000004,
	/** Allows all permissions and bypasses channel permission overwrites (require two-factor auth) */
	ADMINISTRATOR = 0x00000008,
	/** Allows management and editing of channels (require two-factor auth) (channel types: T, V) */
	MANAGE_CHANNELS = 0x00000010,
	/** Allows management and editing of the guild (require two-factor auth) */
	MANAGE_GUILD = 0x00000020,
	/** Allows for the addition of reactions to messages (channel types: T) */
	ADD_REACTIONS = 0x00000040,
	/** Allows for viewing of audit logs */
	VIEW_AUDIT_LOG = 0x00000080,
	/** Allows for using priority speaker in a voice channel (channel types: V) */
	PRIORITY_SPEAKER = 0x00000100,
	/** Allows the user to go live (channel types: V) */
	STREAM = 0x00000200,
	/** Allows guild members to view a channel, which includes reading messages in text channels (channel types: T, V) */
	VIEW_CHANNEL = 0x00000400,
	/** Allows for sending messages in a channel (channel types: T) */
	SEND_MESSAGES = 0x00000800,
	/** Allows for sending of /tts messages (channel types: T) */
	SEND_TTS_MESSAGES = 0x00001000,
	/** Allows for deletion of other users messages (require two-factor auth) (channel types: T) */
	MANAGE_MESSAGES = 0x00002000,
	/** Links sent by users with this permission will be auto-embedded (channel types: T) */
	EMBED_LINKS = 0x00004000,
	/** Allows for uploading images and files (channel types: T) */
	ATTACH_FILES = 0x00008000,
	/** Allows for reading of message history (channel types: T) */
	READ_MESSAGE_HISTORY = 0x00010000,
	/** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel (channel types: T) */
	MENTION_EVERYONE = 0x00020000,
	/** Allows the usage of custom emojis from other servers (channel types: T) */
	USE_EXTERNAL_EMOJIS = 0x00040000,
	/** Allows for viewing guild insights */
	VIEW_GUILD_INSIGHTS = 0x00080000,
	/** Allows for joining of a voice channel (channel types: V) */
	CONNECT = 0x00100000,
	/** Allows for speaking in a voice channel (channel types: V) */
	SPEAK = 0x00200000,
	/** Allows for muting members in a voice channel (channel types: V) */
	MUTE_MEMBERS = 0x00400000,
	/** Allows for deafening of members in a voice channel (channel types: V) */
	DEAFEN_MEMBERS = 0x00800000,
	/** Allows for moving of members between voice channels (channel types: V) */
	MOVE_MEMBERS = 0x01000000,
	/** Allows for using voice-activity-detection in a voice channel (channel types: V) */
	USE_VAD = 0x02000000,
	/** Allows for modification of own nickname */
	CHANGE_NICKNAME = 0x04000000,
	/** Allows for modification of other users nicknames */
	MANAGE_NICKNAMES = 0x08000000,
	/** Allows management and editing of roles (require two-factor auth) (channel types: T, V) */
	MANAGE_ROLES = 0x10000000,
	/** Allows management and editing of webhooks (require two-factor auth) (channel types: T, V) */
	MANAGE_WEBHOOKS = 0x20000000,
	/** Allows management and editing of emojis (require two-factor auth) */
	MANAGE_EMOJIS = 0x40000000,
}
