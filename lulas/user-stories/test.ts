export function test(message: string, run: () => Promise<any> | void) {
	// try {
	run();
	// } catch (error) {
	// 	console.error(`${message}\n${error}`);
	// }
}
