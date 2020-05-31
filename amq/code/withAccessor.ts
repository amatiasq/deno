type SetterFunction<TSelf, TProp> = (
	this: TSelf,
	prev: TProp,
	self: TSelf,
) => TProp;

type SetterHandler<TSelf, TProp> = (
	this: TSelf,
	prev: TProp,
	self: TSelf,
) => TSelf;

type Setter<TSelf, TProp> = TProp | SetterFunction<TSelf, TProp>;

export type WithSetter<TSelf, TProp> = (x: Setter<TSelf, TProp>) => TSelf;

export function withAccessor<TSelf>() {
	return <TKey extends keyof TSelf>(
		key: TKey,
		handler: SetterHandler<TSelf, TSelf[TKey]>,
	) => {
		type TProp = TSelf[TKey];

		return function (this: TSelf, x: Setter<TSelf, TProp>) {
			if (typeof x !== 'function') {
				return handler.call(this, x, this);
			}

			const updater = x as SetterFunction<TSelf, TSelf[TKey]>;
			const val = updater.call(this, this[key], this);
			return handler.call(this, val, this);
		};
	};
}
