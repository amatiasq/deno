// https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params

export interface RawExecuteWebhookParams {
	/**
	 * waits for server confirmation of message send before response, and returns the created message body
	 * (defaults to false; when false a message that is not saved does not return an error)
	 */
	wait?: boolean;
}
