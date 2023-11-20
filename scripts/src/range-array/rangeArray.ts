import minArray from "../min-array/min-array";
import maxArray from "../max-array/max-array";

interface IRange {
  min: number | undefined;
  max: number | undefined;
}

export default function rangeArray(arr: number[]): IRange {
  return {
    min: minArray(arr),
    max: maxArray(arr),
  };
}
