import { RawExecuteWebhookParams } from '../raw/RawExecuteWebhookParams.ts';

// https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params

export interface ExecuteWebhookParams {
	/**
	 * waits for server confirmation of message send before response, and returns the created message body
	 * (defaults to false; when false a message that is not saved does not return an error)
	 */
	wait?: boolean;
}


export function wrapExecuteWebhookParams(x: RawExecuteWebhookParams): ExecuteWebhookParams {
	return x;
}

export function unwrapExecuteWebhookParams(x: ExecuteWebhookParams): RawExecuteWebhookParams {
	return x;
}

export const wrapExecuteWebhookParamsPartial = wrapExecuteWebhookParams as (x: Partial<RawExecuteWebhookParams>) => Partial<ExecuteWebhookParams>;

export const unwrapExecuteWebhookParamsPartial = unwrapExecuteWebhookParams as (x: Partial<ExecuteWebhookParams>) => Partial<RawExecuteWebhookParams>;
