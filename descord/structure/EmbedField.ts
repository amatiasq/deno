import { RawEmbedField } from '../raw/RawEmbedField.ts';

// https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure

export interface EmbedField {
	/** name of the field */
	name: string;
	/** value of the field */
	value: string;
	/** whether or not this field should display inline */
	inline?: boolean;
}


export function wrapEmbedField(x: RawEmbedField): EmbedField {
	return x;
}

export function unwrapEmbedField(x: EmbedField): RawEmbedField {
	return x;
}

export const wrapEmbedFieldPartial = wrapEmbedField as (x: Partial<RawEmbedField>) => Partial<EmbedField>;

export const unwrapEmbedFieldPartial = unwrapEmbedField as (x: Partial<EmbedField>) => Partial<RawEmbedField>;
