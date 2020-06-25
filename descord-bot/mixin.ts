type Mixin<T> = (base: any) => T;
type Ctor<T = any, U = any> = { new (arg: U): T };

export type Applied<
	T0 extends Ctor,
	T1 extends Ctor = Ctor<{}, {}>,
	T2 extends Ctor = Ctor<{}, {}>,
	T3 extends Ctor = Ctor<{}, {}>,
	T4 extends Ctor = Ctor<{}, {}>,
	T5 extends Ctor = Ctor<{}, {}>,
	T6 extends Ctor = Ctor<{}, {}>,
	T7 extends Ctor = Ctor<{}, {}>,
	T8 extends Ctor = Ctor<{}, {}>,
	T9 extends Ctor = Ctor<{}, {}>
> = InstanceType<Apply<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>>;

export type Apply<
	T0 extends Ctor,
	T1 extends Ctor = Ctor<{}, {}>,
	T2 extends Ctor = Ctor<{}, {}>,
	T3 extends Ctor = Ctor<{}, {}>,
	T4 extends Ctor = Ctor<{}, {}>,
	T5 extends Ctor = Ctor<{}, {}>,
	T6 extends Ctor = Ctor<{}, {}>,
	T7 extends Ctor = Ctor<{}, {}>,
	T8 extends Ctor = Ctor<{}, {}>,
	T9 extends Ctor = Ctor<{}, {}>,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T5I extends T0I = InstanceType<T5>,
	T6I extends T0I = InstanceType<T6>,
	T7I extends T0I = InstanceType<T7>,
	T8I extends T0I = InstanceType<T8>,
	T9I extends T0I = InstanceType<T9>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>,
	T5A extends [T0A[0]] = ConstructorParameters<T5>,
	T6A extends [T0A[0]] = ConstructorParameters<T6>,
	T7A extends [T0A[0]] = ConstructorParameters<T7>,
	T8A extends [T0A[0]] = ConstructorParameters<T8>,
	T9A extends [T0A[0]] = ConstructorParameters<T9>
> = {
	new (
		args: T0A[0] &
			T1A[0] &
			T2A[0] &
			T3A[0] &
			T4A[0] &
			T5A[0] &
			T6A[0] &
			T7A[0] &
			T8A[0] &
			T9A[0],
	): T0I & T1I & T2I & T3I & T4I & T5I & T6I & T7I & T8I & T9I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>
>(
	base: T0,
	mixin: Mixin<T1>,
): {
	new (args: T1A[0]): T1I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>
>(
	base: T0,
	mixins: [Mixin<T1>],
): {
	new (args: T1A[0]): T1I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>
>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>],
): {
	new (args: T1A[0] & T2A[0]): T0I & T1I & T2I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>
>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>],
): {
	new (args: T1A[0] & T2A[0] & T3A[0]): T0I & T1I & T2I & T3I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T4 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>
>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>, Mixin<T4>],
): {
	new (args: T1A[0] & T2A[0] & T3A[0] & T4A[0]): T0I & T1I & T2I & T3I & T4I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T4 extends Ctor,
	T5 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T5I extends T0I = InstanceType<T5>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>,
	T5A extends [T0A[0]] = ConstructorParameters<T5>
>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>],
): {
	new (args: T1A[0] & T2A[0] & T3A[0] & T4A[0] & T5A[0]): T1I &
		T2I &
		T3I &
		T4I &
		T5I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T4 extends Ctor,
	T5 extends Ctor,
	T6 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T5I extends T0I = InstanceType<T5>,
	T6I extends T0I = InstanceType<T6>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>,
	T5A extends [T0A[0]] = ConstructorParameters<T5>,
	T6A extends [T0A[0]] = ConstructorParameters<T6>
>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>, Mixin<T6>],
): {
	new (args: T1A[0] & T2A[0] & T3A[0] & T4A[0] & T5A[0] & T6A[0]): T1I &
		T2I &
		T3I &
		T4I &
		T5I &
		T6I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T4 extends Ctor,
	T5 extends Ctor,
	T6 extends Ctor,
	T7 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T5I extends T0I = InstanceType<T5>,
	T6I extends T0I = InstanceType<T6>,
	T7I extends T0I = InstanceType<T7>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>,
	T5A extends [T0A[0]] = ConstructorParameters<T5>,
	T6A extends [T0A[0]] = ConstructorParameters<T6>,
	T7A extends [T0A[0]] = ConstructorParameters<T7>
>(
	base: T0,
	mixins: [
		Mixin<T1>,
		Mixin<T2>,
		Mixin<T3>,
		Mixin<T4>,
		Mixin<T5>,
		Mixin<T6>,
		Mixin<T7>,
	],
): {
	new (
		args: T1A[0] & T2A[0] & T3A[0] & T4A[0] & T5A[0] & T6A[0] & T7A[0],
	): T0I & T1I & T2I & T3I & T4I & T5I & T6I & T7I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T4 extends Ctor,
	T5 extends Ctor,
	T6 extends Ctor,
	T7 extends Ctor,
	T8 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T5I extends T0I = InstanceType<T5>,
	T6I extends T0I = InstanceType<T6>,
	T7I extends T0I = InstanceType<T7>,
	T8I extends T0I = InstanceType<T8>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>,
	T5A extends [T0A[0]] = ConstructorParameters<T5>,
	T6A extends [T0A[0]] = ConstructorParameters<T6>,
	T7A extends [T0A[0]] = ConstructorParameters<T7>,
	T8A extends [T0A[0]] = ConstructorParameters<T8>
>(
	base: T0,
	mixins: [
		Mixin<T1>,
		Mixin<T2>,
		Mixin<T3>,
		Mixin<T4>,
		Mixin<T5>,
		Mixin<T6>,
		Mixin<T7>,
		Mixin<T8>,
	],
): {
	new (
		args: T1A[0] & T2A[0] & T3A[0] & T4A[0] & T5A[0] & T6A[0] & T7A[0] & T8A[0],
	): T0I & T1I & T2I & T3I & T4I & T5I & T6I & T7I & T8I;
};

export function mixin<
	T0 extends Ctor,
	T1 extends Ctor,
	T2 extends Ctor,
	T3 extends Ctor,
	T4 extends Ctor,
	T5 extends Ctor,
	T6 extends Ctor,
	T7 extends Ctor,
	T8 extends Ctor,
	T9 extends Ctor,
	T0I = InstanceType<T0>,
	T1I extends T0I = InstanceType<T1>,
	T2I extends T0I = InstanceType<T2>,
	T3I extends T0I = InstanceType<T3>,
	T4I extends T0I = InstanceType<T4>,
	T5I extends T0I = InstanceType<T5>,
	T6I extends T0I = InstanceType<T6>,
	T7I extends T0I = InstanceType<T7>,
	T8I extends T0I = InstanceType<T8>,
	T9I extends T0I = InstanceType<T9>,
	T0A extends [any] = ConstructorParameters<T0>,
	T1A extends [T0A[0]] = ConstructorParameters<T1>,
	T2A extends [T0A[0]] = ConstructorParameters<T2>,
	T3A extends [T0A[0]] = ConstructorParameters<T3>,
	T4A extends [T0A[0]] = ConstructorParameters<T4>,
	T5A extends [T0A[0]] = ConstructorParameters<T5>,
	T6A extends [T0A[0]] = ConstructorParameters<T6>,
	T7A extends [T0A[0]] = ConstructorParameters<T7>,
	T8A extends [T0A[0]] = ConstructorParameters<T8>,
	T9A extends [T0A[0]] = ConstructorParameters<T9>
>(
	base: T0,
	mixins: [
		Mixin<T1>,
		Mixin<T2>,
		Mixin<T3>,
		Mixin<T4>,
		Mixin<T5>,
		Mixin<T6>,
		Mixin<T7>,
		Mixin<T8>,
		Mixin<T9>,
	],
): {
	new (
		args: T1A[0] &
			T2A[0] &
			T3A[0] &
			T4A[0] &
			T5A[0] &
			T6A[0] &
			T7A[0] &
			T8A[0] &
			T9A[0],
	): T0I & T1I & T2I & T3I & T4I & T5I & T6I & T7I & T8I & T9I;
};

export function mixin<T, U>(base: T, mixins: Mixin<U> | Array<Mixin<any>>) {
	if (!Array.isArray(mixins)) {
		return mixins(base);
	}

	return mixins.reduce((output, mixin) => mixin(output), base);
}
