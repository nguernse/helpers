/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * @see https://leetcode.com/problems/spiral-matrix/
 */
export default function spiralMatrix(nums: number[][]): number[] {
  if (nums.length === 0) return [];
  if (nums.length === 1) return nums[0];

  const result: number[] = [];

  let rowStart: number = 0;
  let rowEnd: number = nums.length - 1;

  let colStart: number = 0;
  let colEnd: number = nums[0].length - 1;

  // direction: 0 => left to right, 1 => top to bottom, 2 => right to left, 3 => bottom to top
  let direction: number = 0;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // move left to right
    if (direction === 0) {
      for (let i = colStart; i <= colEnd; i += 1) {
        result.push(nums[rowStart][i]);
      }

      // increment so we don't repeat the same row
      rowStart += 1;
      direction += 1;
      // move top to bottom
    } else if (direction === 1) {
      for (let i = rowStart; i <= rowEnd; i += 1) {
        result.push(nums[i][colEnd]);
      }

      // decrement so we don't repeat the same column
      colEnd -= 1;
      direction += 1;
      // move right to left
    } else if (direction === 2) {
      for (let i = colEnd; i >= colStart; i -= 1) {
        result.push(nums[rowEnd][i]);
      }

      // decrement so we don't repeat the same row
      rowEnd -= 1;
      direction += 1;
      // bottom to top
    } else {
      for (let i = rowEnd; i >= rowStart; i -= 1) {
        result.push(nums[i][colStart]);
      }

      // increment so we don't repeat the same column
      colStart += 1;

      // repeat the spiral again
      direction = 0;
    }
  }

  return result;
}
