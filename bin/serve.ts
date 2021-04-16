// TODO: Improve with https://dev.to/aralroca/learn-deno-chat-app-37f0#serve-an-indexhtml

import {
	acceptWebSocket,
	isWebSocketCloseEvent,
} from 'https://deno.land/std/ws/mod.ts';

import { Scheduler } from '../amq/util/Scheduler.ts';
import { join } from 'https://deno.land/std/path/mod.ts';
import { serve as openServer } from 'https://deno.land/std/http/server.ts';
import { parse } from 'https://deno.land/std/flags/mod.ts';

export async function start(
	path = '.',
	file = 'main.js',
	port = 8080,
	extraHtml = '',
) {
	const socketPort = port + 1;
	let html = getHtml('', socketPort, 'Loading...');

	const sockets = openSocket(socketPort);

	watchBundle(path, file, content => {
		html = getHtml(content, socketPort, extraHtml);
		sockets.forEach(x => x.send('now'));
	});

	await serve(port, () => html);
}

function openSocket(socketPort: number) {
	const sockets: any[] = [];
	openSocketInternal();
	console.log(`Socket open at :${socketPort}`);
	return sockets;

	async function openSocketInternal() {
		for await (const req of openServer(`:${socketPort}`)) {
			const { conn, r: bufReader, w: bufWriter, headers } = req;

			try {
				const sock = await acceptWebSocket({
					conn,
					bufReader,
					bufWriter,
					headers,
				});

				sockets.push(sock);
				console.log('socket connected!');

				try {
					for await (const ev of sock) {
						if (isWebSocketCloseEvent(ev)) {
							sockets.splice(sockets.indexOf(sock), 1);
							const { code, reason } = ev;
							console.log('ws:Close', code, reason);
						}
					}
				} catch (err) {
					console.error(`failed to receive frame: ${err}`);

					if (!sock.isClosed) {
						await sock.close(1000).catch(console.error);
					}
				}
			} catch (err) {
				console.error(`failed to accept websocket: ${err}`);
				await req.respond({ status: 400 });
			}
		}
	}
}

async function serve(port: number, getter: () => string) {
	const s = openServer({ port });
	console.log(`http://localhost:${port}/`);

	for await (const req of s) {
		req.respond({ body: getter() });
	}
}

async function watchBundle(
	path: string,
	file: string,
	output: (content: string) => void,
) {
	const fullpath = join(path, file);
	const run = async () => output(await buildBundle(fullpath));
	const scheduler = new Scheduler(100, run);

	run();

	console.log(`Watching FS at ${path}`);

	for await (const event of Deno.watchFs(path)) {
		scheduler.restart();
	}
}

async function buildBundle(file: string) {
	console.log(`Bundling '${file}'...`);

	await Deno.run({
		cmd: ['deno', 'cache', file],
	}).status();

	const buffer = await Deno.run({
		cmd: ['deno', 'bundle', '--config', 'config/tsconfig.dom.json', file],
		stdout: 'piped',
	}).output();

	const content = new TextDecoder().decode(buffer);

	// process.const[(diagnostics, content)] = await Deno.bundle(file, undefined, {
	// 	lib: ['dom'],
	// 	inlineSourceMap: true,
	// });

	// if (diagnostics) {
	// 	console.log('Error in compilation:');
	// 	console.log(Deno.formatDiagnostics(diagnostics));
	// }

	console.log(`Generated ${content.length} bytes`);
	return content;
}

function getHtml(script: string, socketPort: number, extra: string) {
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			html {
				height: 100%;
				background-color: black;
			}
			html,
			body {
				margin: 0;
				padding: 0;
				display: flex;
				flex: 1;
			}
		</style>
	</head>
	<body>
		${extra}
		<script>

(function connect() {
	let liveReload = new WebSocket('ws:localhost:${socketPort}');
	liveReload.onmessage = () => window.location.reload();
	liveReload.onclose = () => {
		console.error('Live reload disconnected, retrying in 1s...')
		setTimeout(connect, 1000);
	};
})()

${script}

		</script>
	</body>
</html>`;
}

if (import.meta.main) {
	const {
		port,
		html,
		canvas,
		_: [file],
	} = parse(Deno.args, { boolean: ['canvas'] });

	if (!file) {
		usage();
		Deno.exit(1);
	}

	const extra = canvas ? `<canvas></canvas>${html || ''}` : html || '';
	start(Deno.cwd(), file as string, port, extra);
}

function usage() {
	console.log(
		`Usage: ${Deno.execPath()} ${import.meta.url} frontend-file.ts

Options
--port NUMBER	Port to serve the webpage. Live reload socket port will be NUMBER+1. Default 8080
--html CONTENT	HTML to include in the webpage before the script
--canvas	Alias for "--html '<canvas></canvas>'"
`,
	);
}
