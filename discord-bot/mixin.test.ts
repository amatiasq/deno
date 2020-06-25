import { mixin } from './mixin.ts';

interface Options {
	base: string;
}

class BaseClass {
	constructor(protected readonly options: Options) {}

	baseMethod() {}
}

function mixin1(base: typeof BaseClass) {
	return class Mixin1Class extends base {
		constructor(
			protected readonly options: Options & {
				mixin1: string;
			},
		) {
			super(options);
		}

		mixin1Method() {}
	};
}

function mixin2(base: typeof BaseClass) {
	return class Mixin2Class extends base {
		constructor(
			protected readonly options: Options & {
				mixin2: string;
			},
		) {
			super(options);
		}

		mixin2Method() {}
	};
}

function mixin3(base: typeof BaseClass) {
	return class Mixin3Class extends base {
		constructor(
			protected readonly options: Options & {
				mixin3: string;
			},
		) {
			super(options);
		}

		mixin3Method() {}
	};
}

const MyClass = mixin(BaseClass, [mixin1, mixin2, mixin3]);

const instance = new MyClass({
	base: 'base',
	mixin1: 'mixin1',
	mixin2: 'mixin2',
	mixin3: 'mixin3',
});

instance.baseMethod();
instance.mixin1Method();
instance.mixin2Method();
instance.mixin3Method();
