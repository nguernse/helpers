/**
 * You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n.
 * You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.
 * The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array,
 * the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
 *
 * Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
 *
 * @see https://leetcode.com/problems/convert-1d-array-into-2d-array/
 *
 * O(n), because you only loop through the original array once
 */
export default function construct2dArray(
  original: number[],
  rows: number,
  cols: number
): number[][] {
  if (original.length !== cols * rows) return [];

  let result: number[][] = [];
  let row: number[] = [];

  for (let i = 0; i < original.length; i += 1) {
    row.push(original[i]);

    if (row.length === cols) {
      result.push(row);
      row = [];
    }
  }

  return result;
}
