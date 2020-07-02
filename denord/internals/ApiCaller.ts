import { RequestMethod } from './RequestMethod.ts';
import { HttpStatus } from '../enum/HttpStatus.ts';

export type RequestBody = {};
export type QueryParams = {};

export class ApiCaller {
	readonly authorization: string;

	constructor(token: string) {
		this.authorization = `Bot ${token}`;
	}

	async request<T>(
		method: RequestMethod,
		url: string,
		body?: RequestBody | null,
	): Promise<T>;
	async request<T extends void>(
		method: RequestMethod,
		url: string,
		body?: RequestBody | null,
	): Promise<void>;
	async request<T>(
		method: RequestMethod,
		url: string,
		body?: RequestBody | null,
	) {
		const request = createRequest(this.authorization, method, url, body);
		const response = await fetch(request);

		if (response.status === HttpStatus.NO_CONTENT) {
			return;
		}

		try {
			const json = await response.json();
			return json as T;
		} catch (err) {
			console.log('ERROR:', await response.text());
			throw err;
		}
	}

	get<T = any>(url: string, params?: QueryParams) {
		const fullUrl = params ? this.addQueryParams(url, params) : url;
		return this.request<T>(RequestMethod.GET, fullUrl);
	}

	patch<T = any>(
		url: string,
		body?: RequestBody | null,
		params?: QueryParams,
	) {
		const fullUrl = params ? this.addQueryParams(url, params) : url;
		return this.request<T>(RequestMethod.PATCH, fullUrl, body);
	}

	put<T = any>(url: string, body?: RequestBody | null, params?: QueryParams) {
		const fullUrl = params ? this.addQueryParams(url, params) : url;
		return this.request<T>(RequestMethod.PUT, fullUrl, body);
	}

	post<T = any>(
		url: string,
		body?: RequestBody | null,
		params?: QueryParams,
	) {
		const fullUrl = params ? this.addQueryParams(url, params) : url;
		return this.request<T>(RequestMethod.POST, fullUrl, body);
	}

	delete<T = any>(
		url: string,
		body?: RequestBody | null,
		params?: QueryParams,
	) {
		const fullUrl = params ? this.addQueryParams(url, params) : url;
		return this.request<T>(RequestMethod.DELETE, fullUrl, body);
	}

	addQueryParams(url: string, params: {}) {
		const serialized = Object.entries(
			params as { [id: string]: string },
		).map(
			([key, value]) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
		);

		return `${url}?${serialized.join('&')}`;
	}
}

function createRequest(
	authorization: string,
	method: RequestMethod,
	url: string,
	body?: RequestBody | null,
) {
	return new Request(url, {
		method,
		headers: {
			Authorization: authorization,
			'User-Agent': 'denord (https://github.com/amatiasq/denord, 0.0.1)',
			'Content-Type': 'application/json',
		},
		body: body && JSON.stringify(body),
	});
}
