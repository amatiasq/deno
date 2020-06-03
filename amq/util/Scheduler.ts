export class Scheduler {
  private timer: number | null = null;

  get isRunning() {
    return this.timer != null;
  }

  constructor(
    private readonly delay: number,
    private readonly action: () => void,
  ) {}

  start() {
    if (this.isRunning) {
      return;
    }

    this.timer = setTimeout(() => this.run(), this.delay);
  }

  stop() {
    if (!this.isRunning) {
      return;
    }

    clearTimeout(this.timer as number);
    this.timer = null;
  }

  restart() {
    this.stop();
    this.start();
  }

  run() {
    this.stop();
    this.action();
  }
}
