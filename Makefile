.DEFAULT_GOAL := serve-lulas

build-lulas:
	bin/bundle.sh lulas

serve-lulas:
	deno run --allow-read --allow-net --allow-run bin/serve.ts --canvas lulas/main.ts

run-tests:
	deno test

test-watch: run-tests
	fswatch  -o . \
	| xargs -n1 -I{} deno test

install-hooks:
	echo '#!/bin/sh\nprettier -c **/*.ts\nmake run-tests' > .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit
