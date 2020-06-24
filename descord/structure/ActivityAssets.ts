import { RawActivityAssets } from '../raw/RawActivityAssets.ts';


export interface ActivityAssets {
	/** the id for a large asset of the activity, usually a snowflake */
	largeImage?: string;
	/** text displayed when hovering over the large image of the activity */
	largeText?: string;
	/** the id for a small asset of the activity, usually a snowflake */
	smallImage?: string;
	/** text displayed when hovering over the small image of the activity */
	smallText?: string;
}


export function wrapActivityAssets(x: RawActivityAssets): ActivityAssets {
	return {
		...x,
		largeImage: x.large_image && x.large_image,
		largeText: x.large_text && x.large_text,
		smallImage: x.small_image && x.small_image,
		smallText: x.small_text && x.small_text,
	};
}

export function unwrapActivityAssets(x: ActivityAssets): RawActivityAssets {
	return {
		...x,
		large_image: x.largeImage && x.largeImage,
		large_text: x.largeText && x.largeText,
		small_image: x.smallImage && x.smallImage,
		small_text: x.smallText && x.smallText,
	};
}

export const wrapActivityAssetsPartial = wrapActivityAssets as (x: Partial<RawActivityAssets>) => Partial<ActivityAssets>;

export const unwrapActivityAssetsPartial = unwrapActivityAssets as (x: Partial<ActivityAssets>) => Partial<RawActivityAssets>;
