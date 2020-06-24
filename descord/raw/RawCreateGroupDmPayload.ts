// https://discord.com/developers/docs/resources/user#create-group-dm-json-params

export interface RawCreateGroupDmPayload {
	/** access tokens of users that have granted your app the gdm.join scope */
	access_tokens: string[];
	/** a dictionary of user ids to their respective nicknames */
	nicks: { [id: string]: string };
}
