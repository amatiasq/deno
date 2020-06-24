import { RawCreateDmPayload } from '../raw/RawCreateDmPayload.ts';
import { UserId } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/user#create-dm-json-params

export interface CreateDmPayload {
	/** the recipient to open a DM channel with */
	recipientId: UserId;
}


export function wrapCreateDmPayload(x: RawCreateDmPayload): CreateDmPayload {
	return {
		...x,
		recipientId: x.recipient_id,
	};
}

export function unwrapCreateDmPayload(x: CreateDmPayload): RawCreateDmPayload {
	return {
		...x,
		recipient_id: x.recipientId,
	};
}

export function wrapCreateDmPayloadPartial(x: Partial<RawCreateDmPayload>): Partial<CreateDmPayload> {
	return {
		...x,
		recipientId: x.recipient_id && x.recipient_id,
	};
}

export function unwrapCreateDmPayloadPartial(x: Partial<CreateDmPayload>): Partial<RawCreateDmPayload> {
	return {
		...x,
		recipient_id: x.recipientId && x.recipientId,
	};
}
