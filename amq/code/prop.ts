function prop<Type, Prop extends keyof Type>(
	key: Prop,
	handler: (this: Type, newValue: Type[Prop], self: Type) => Type,
) {
	type PropType = Type[Prop];

	return function (
		this: Type,
		x: PropType | ((original: PropType) => PropType),
	) {
		const newValue =
			typeof x === 'function' ? (x as Function)(this[key]) : x;
		return handler.call(this, newValue, this);
	};
}
