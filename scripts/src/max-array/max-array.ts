export default function maxArray(arr: number[]): number | undefined {
  return Math.max.apply(null, arr);
}
