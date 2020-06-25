import { RawUser } from '../raw/RawUser.ts';

export function userMethods(x: RawUser) {
	return {
		toString() {
			return `<@${x.id}>`;
		},
	};
}
