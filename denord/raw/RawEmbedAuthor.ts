// https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure

export interface RawEmbedAuthor {
	/** name of author */
	name?: string;
	/** url of author */
	url?: string;
	/** url of author icon (only supports http(s) and attachments) */
	icon_url?: string;
	/** a proxied url of author icon */
	proxy_icon_url?: string;
}
