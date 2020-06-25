export interface RawActivityAssets {
	/** the id for a large asset of the activity, usually a snowflake */
	large_image?: string;
	/** text displayed when hovering over the large image of the activity */
	large_text?: string;
	/** the id for a small asset of the activity, usually a snowflake */
	small_image?: string;
	/** text displayed when hovering over the small image of the activity */
	small_text?: string;
}
