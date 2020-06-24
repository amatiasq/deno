// https://discord.com/developers/docs/resources/channel#embed-object-embed-types

export enum EmbedType {
	/** generic embed rendered from embed attributes */
	RICH = 'rich',
	/** image embed */
	IMAGE = 'image',
	/** video embed */
	VIDEO = 'video',
	/** animated gif image embed rendered as a video embed */
	GIFV = 'gifv',
	/** article embed */
	ARTICLE = 'article',
	/** link embed */
	LINK = 'link',
}
