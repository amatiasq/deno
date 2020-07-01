export class Emitter<T = any> {
	private readonly listeners = new Set<(data: T) => void>();

	emit(data: T) {
		for (const listener of this.listeners) {
			listener(data);
		}
	}

	subscribe(listener: (data: T) => void) {
		this.listeners.add(listener);

		return {
			unsubscribe: () => this.listeners.delete(listener),
		};
	}
}
