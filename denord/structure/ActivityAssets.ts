import { RawActivityAssets } from '../raw/RawActivityAssets.ts';
import { toApiCasing, fromApiCasing } from '../internals/casing.ts';

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


export const wrapActivityAssets = fromApiCasing as (x: RawActivityAssets) => ActivityAssets;

export const unwrapActivityAssets = toApiCasing as (x: ActivityAssets) => RawActivityAssets;

export const wrapActivityAssetsPartial = wrapActivityAssets as (x: Partial<RawActivityAssets>) => Partial<ActivityAssets>;

export const unwrapActivityAssetsPartial = unwrapActivityAssets as (x: Partial<ActivityAssets>) => Partial<RawActivityAssets>;
