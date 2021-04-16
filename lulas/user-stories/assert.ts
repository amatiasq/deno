export function assert(value: any) {
	if (!value) {
		throw Error(`Assertion error: ${value}`);
	}
}

export default assert;

// export function assertEquals<T>(a: T, b: T) {
//   assert(a == b)
// }
