// https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure

export interface RawEmbedField {
	/** name of the field */
	name: string;
	/** value of the field */
	value: string;
	/** whether or not this field should display inline */
	inline?: boolean;
}
