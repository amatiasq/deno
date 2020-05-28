import { parse } from 'https://deno.land/std/flags/mod.ts';
import { start as startWeb } from './web.ts';

const extraHtml = `

<canvas></canvas>

<script>
(() => {
    const canvas = document.querySelector('canvas');

    resize();
    addEventListener('resize', resize);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
})();
</script>

`;

export async function start(path = '.', file = 'main.js', port = 8080) {
	startWeb(path, file, port, extraHtml);
}

if (import.meta.main) {
	const {
		port,
		_: [file],
	} = parse(Deno.args);

	if (!file) {
		console.log(
			`Usage: ${Deno.execPath()} ${import.meta.url} frontend-file.ts`,
		);
		Deno.exit(1);
	}

	start(Deno.cwd(), file as string, port);
}
