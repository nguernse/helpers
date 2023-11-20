export default function minArray(arr: number[]): number | undefined {
  return Math.min.apply(null, arr);
}
