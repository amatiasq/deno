import { RawGroupDmAddRecipientPayload } from '../raw/RawGroupDmAddRecipientPayload.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

// https://discord.com/developers/docs/resources/channel#group-dm-add-recipient-json-params

export interface GroupDmAddRecipientPayload {
	/** access token of a user that has granted your app the gdm.join scope */
	accessToken: string;
	/** nickname of the user being added */
	nick: string;
}


export const wrapGroupDmAddRecipientPayload = fromApiCasing as (x: RawGroupDmAddRecipientPayload) => GroupDmAddRecipientPayload;

export const unwrapGroupDmAddRecipientPayload = toApiCasing as (x: GroupDmAddRecipientPayload) => RawGroupDmAddRecipientPayload;

export const wrapGroupDmAddRecipientPayloadPartial = wrapGroupDmAddRecipientPayload as (x: Partial<RawGroupDmAddRecipientPayload>) => Partial<GroupDmAddRecipientPayload>;

export const unwrapGroupDmAddRecipientPayloadPartial = unwrapGroupDmAddRecipientPayload as (x: Partial<GroupDmAddRecipientPayload>) => Partial<RawGroupDmAddRecipientPayload>;
