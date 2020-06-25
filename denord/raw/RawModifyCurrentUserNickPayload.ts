// https://discord.com/developers/docs/resources/guild#modify-current-user-nick-json-params

export interface RawModifyCurrentUserNickPayload {
	/** value to set users nickname to (requires permission: CHANGE_NICKNAME) */
	nick?: string;
}
