import { mixin } from './mixin.ts';

interface Options {
	base: string;
}

//
// Create a base class
//

class BaseClass {
	constructor(protected options: Options) {}

	baseMethod() {}
}

//
// Create a few mixins that can extend BaseClass
//

function mixin1(base: typeof BaseClass) {
	return class Mixin1Class extends base {
		constructor(protected options: Options & { mixin1: string }) {
			super(options);
		}

		mixin1Method() {}
	};
}

function mixin2(base: typeof BaseClass) {
	return class Mixin2Class extends base {
		constructor(protected options: Options & { mixin2: string }) {
			super(options);
		}

		mixin2Method() {}
	};
}

// We can define the options as interface
interface Mixin3Options extends Options {
	mixin3: string;
}

function mixin3(base: typeof BaseClass) {
	return class Mixin3Class extends base {
		constructor(protected options: Mixin3Options) {
			super(options);
		}

		mixin3Method() {}
	};
}

//
// Apply any of the mixins to the base class
// And get a new class with the mixins applied
//
const MyClass = mixin(BaseClass, [mixin1, mixin2, mixin3]);

const instance = new MyClass({
	// Remove any property and typescript will complain
	// And tell you exactly what feature was missing
	base: 'base',
	mixin1: 'mixin1',
	mixin2: 'mixin2',
	mixin3: 'mixin3',
});

// Method signatures are inherited and type-checked
instance.baseMethod();
instance.mixin1Method();
instance.mixin2Method();
instance.mixin3Method();

//
// Optional
// You can create a mixin that depends on other mixin
//

import { Apply } from './mixin.ts';

// Get the type of the mixin we depend on
type Mixin3 = ReturnType<typeof mixin3>;

function mixinDependsOn3(
	// This mixin can only be applied to an
	parent: Apply<typeof BaseClass, Mixin3>,
) {
	return class MixinDependsOn3 extends parent {
		constructor(
			protected options: Mixin3Options & { someOtherOption: number },
		) {
			super(options);
		}

		anotherMethod(foo: boolean) {}
	};
}

// This will fail because we need it to also extend Mixin3
//const AnotherClass = mixin(BaseClass, [mixinDependsOn3]);

const AnotherClass = mixin(BaseClass, [mixin3, mixinDependsOn3]);

const anotherInstance = new AnotherClass({
	base: 'base',
	mixin3: 'mixin3',
	someOtherOption: 1,
});

anotherInstance.baseMethod();
anotherInstance.mixin3Method();
anotherInstance.anotherMethod(true);

//
// Optional
// We can define a type that has a given class applied
//

import { Applied } from './mixin.ts';

// Get the type of the mixin we depend on
type Mixin2 = ReturnType<typeof mixin2>;

function myFunction(requiresMixin2: Applied<typeof BaseClass, Mixin2>) {
	requiresMixin2.baseMethod();
	requiresMixin2.mixin2Method();
}

// This will fail: `anotherInstance` does not have `Mixin2`
//myFunction(anotherInstance);
myFunction(instance);
