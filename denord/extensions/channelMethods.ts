import { RawChannel } from '../raw/RawChannel.ts';

export function channelMethods(x: RawChannel) {
	return {
		toString() {
			return `<#${x.id}>`;
		},
	};
}
