export default function debounce<F extends Function>(
  callback: F,
  delay: number
): F {
  let timer: ReturnType<typeof setTimeout>;

  /**
   * @see Typing 'this' - https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function
   */
  return <any>function (this: any, ...args: any[]) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
