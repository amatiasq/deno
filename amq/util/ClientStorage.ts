/// <reference lib="dom" />

const DEFAULT_VERSION = 0;

export interface IStorageOptions {
  isSessionOnly?: boolean;
  noCache?: boolean;
  version?: number;
}

export class ClientStorage<T = any> {
  readonly version: number;
  private cache: T | null = null;
  private isCached = false;
  private readonly storage: Storage;
  private readonly useCache: boolean;

  constructor(
    private readonly key: string,
    {
      isSessionOnly = false,
      noCache = false,
      version = DEFAULT_VERSION,
    }: IStorageOptions = {},
  ) {
    this.cache = null;
    this.version = version;
    this.useCache = !noCache;
    this.storage = isSessionOnly ? sessionStorage : localStorage;
  }

  get() {
    if (!this.useCache) {
      return this.load();
    }

    if (this.isCached) {
      return deepClone(this.cache);
    }

    this.isCached = true;
    this.cache = this.load();
    return this.cache;
  }

  set(json: T) {
    this.save(json);
  }

  save(json: T) {
    const data = { data: json, version: this.version };

    if (this.useCache) {
      this.cache = json;
      this.isCached = true;
    }

    this.storage.setItem(this.key, JSON.stringify(data));
  }

  load(): T | null {
    const json = this.storage.getItem(this.key);

    if (!json) {
      return null;
    }

    const content = JSON.parse(json);

    if (content.version !== this.version) {
      this.reset();
      return null;
    }

    if (this.useCache) {
      this.cache = deepClone(content.data);
      this.isCached = true;
    }

    return content.data;
  }

  loadAsync(delay = 100) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.load()), delay);
    });
  }

  clear() {
    const value = this.get();
    this.reset();
    return value;
  }

  reset() {
    this.storage.removeItem(this.key);

    this.cache = null;
    this.isCached = true;
  }
}

function deepClone<T>(target: T): T {
  return typeof target === "object"
    ? JSON.parse(JSON.stringify(target))
    : target;
}
