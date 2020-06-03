export function compose<T = any>(
  first: (value: T) => any,
  ...args: Function[]
) {
  return (value: T) => args.reduce((current, fn) => fn(current), first(value));
}
