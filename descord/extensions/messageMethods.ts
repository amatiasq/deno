import { RawMessage } from '../raw/RawMessage.ts';

export function messageMethods(x: RawMessage) {
	return {
		toString() {
			return x.content;
		},
	};
}
