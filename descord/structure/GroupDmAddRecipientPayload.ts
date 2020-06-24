import { RawGroupDmAddRecipientPayload } from '../raw/RawGroupDmAddRecipientPayload.ts';

// https://discord.com/developers/docs/resources/channel#group-dm-add-recipient-json-params

export interface GroupDmAddRecipientPayload {
	/** access token of a user that has granted your app the gdm.join scope */
	accessToken: string;
	/** nickname of the user being added */
	nick: string;
}


export function wrapGroupDmAddRecipientPayload(x: RawGroupDmAddRecipientPayload): GroupDmAddRecipientPayload {
	return {
		...x,
		accessToken: x.access_token,
	};
}

export function unwrapGroupDmAddRecipientPayload(x: GroupDmAddRecipientPayload): RawGroupDmAddRecipientPayload {
	return {
		...x,
		access_token: x.accessToken,
	};
}

export function wrapGroupDmAddRecipientPayloadPartial(x: Partial<RawGroupDmAddRecipientPayload>): Partial<GroupDmAddRecipientPayload> {
	return {
		...x,
		accessToken: x.access_token && x.access_token,
	};
}

export function unwrapGroupDmAddRecipientPayloadPartial(x: Partial<GroupDmAddRecipientPayload>): Partial<RawGroupDmAddRecipientPayload> {
	return {
		...x,
		access_token: x.accessToken && x.accessToken,
	};
}
