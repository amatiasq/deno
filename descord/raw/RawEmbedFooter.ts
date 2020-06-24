// https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

export interface RawEmbedFooter {
	/** footer text */
	text: string;
	/** url of footer icon (only supports http(s) and attachments) */
	icon_url?: string;
	/** a proxied url of footer icon */
	proxy_icon_url?: string;
}
