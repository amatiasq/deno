export enum WebSocketCloseCode {
	/** Normal closure; the connection successfully completed whatever purpose for which it was created. */
	NORMAL_CLOSURE = 1000,
	/** The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection. */
	GOING_AWAY = 1001,
	/** The endpoint is terminating the connection due to a protocol error. */
	PROTOCOL_ERROR = 1002,
	/** The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data). */
	UNSUPPORTED_DATA = 1003,
	/** Reserved.  Indicates that no status code was provided even though one was expected. */
	NO_STATUS_RECEIVED = 1005,
	/** Reserved. Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected. */
	ABNORMAL_CLOSURE = 1006,
	/** The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message). */
	INVALID_FRAME_PAYLOAD_DATA = 1007,
	/** The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable. */
	POLICY_VIOLATION = 1008,
	/** The endpoint is terminating the connection because a data frame was received that is too large. */
	MESSAGE_TOO_BIG = 1009,
	/** The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't. */
	MISSING_EXTENSION = 1010,
	/** The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request. */
	INTERNAL_ERROR = 1011,
	/** The server is terminating the connection because it is restarting. [Ref] */
	SERVICE_RESTART = 1012,
	/** The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients. [Ref] */
	TRY_AGAIN_LATER = 1013,
	/** The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code. */
	BAD_GATEWAY = 1014,
	/** Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified). */
	TLS_HANDSHAKE = 1015,
}
