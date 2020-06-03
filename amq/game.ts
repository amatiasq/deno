/// <reference lib="dom" />

export function loop<T>(
  tick: (universe: T) => T,
  render: (universe: T) => void,
  initial: T,
) {
  let isRunning = true;
  start(initial);
  return () => (isRunning ? pause() : unpause());

  function start(uni: T) {
    const nextState = isRunning ? tick(uni) : uni;
    render(nextState);
    requestAnimationFrame(() => start(nextState));
  }

  function pause() {
    isRunning = false;
  }

  function unpause() {
    isRunning = true;
  }
}
