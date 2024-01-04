/**
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 * @see https://leetcode.com/problems/transpose-matrix/
 */
export default function transposeMatrix(matrix: number[][]): number[][] {
  if (matrix.length === 0) return matrix;

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // create new array with dimensions of numCols x numRows
  const answer: number[][] = Array.from({ length: numCols }, () =>
    Array(numRows)
  );

  for (let i = 0; i < numCols; i += 1) {
    for (let j = 0; j < numRows; j += 1) {
      answer[i][j] = matrix[j][i];
    }
  }

  return answer;
}
