import { Emitter } from './Emitter.ts';

export class MultipleEmitter<TKey = any, TEvent = any> {
	private readonly emitters = new Map<TKey, Emitter<TEvent>>();

	emit(key: TKey, data: TEvent) {
		const emitter = this.emitters.get(key);

		if (emitter) {
			emitter!.emit(data);
		}
	}

	subscribe(key: TKey, listener: (data: TEvent) => void) {
		let emitter = this.emitters.get(key);

		if (!emitter) {
			emitter = new Emitter<TEvent>();
			this.emitters.set(key, emitter);
		}

		return emitter.subscribe(listener);
	}
}
