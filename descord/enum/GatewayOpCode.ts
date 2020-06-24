export enum GatewayOpCode {
	/** (Receive)	An event was dispatched. */
	Dispatch = 0,
	/** (Send/Receive)	Fired periodically by the client to keep the connection alive. */
	Heartbeat = 1,
	/** (Send)	Starts a new session during the initial handshake. */
	Identify = 2,
	/** (Send)	Update the client's presence. */
	PresenceUpdate = 3,
	/** (Send)	Used to join/leave or move between voice channels. */
	VoiceStateUpdate = 4,
	/** (Send)	Resume a previous session that was disconnected. */
	Resume = 6,
	/** (Receive)	You should attempt to reconnect and resume immediately. */
	Reconnect = 7,
	/** (Send)	Request information about offline guild members in a large guild. */
	RequestGuildMembers = 8,
	/** (Receive)	The session has been invalidated. You should reconnect and identify/resume accordingly. */
	InvalidSession = 9,
	/** (Receive)	Sent immediately after connecting, contains the heartbeat_interval to use. */
	Hello = 10,
	/** (Receive)	Sent in response to receiving a heartbeat to acknowledge that it has been received. */
	HeartbeatAck = 11,
}
