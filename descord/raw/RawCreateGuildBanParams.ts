import { integer } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/guild#create-guild-ban-query-string-params

export interface RawCreateGuildBanParams {
	/** number of days to delete messages for (0-7) */
	['delete-message-days']?: integer;
	/** reason for the ban */
	reason?: string;
}
