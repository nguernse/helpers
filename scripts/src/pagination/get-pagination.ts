export type Page = string | number | undefined;
export type Offset = string | number | undefined;

export interface IPagination {
  from: number;
  to: number;
  offset: number;
}

/**
 * Generate pagination for a table, assuming starting row position is 0.
 *
 * @param page
 * @param offset
 * @returns IPagination
 *
 * @example
 * getPagination(0, 10) => { from: 0, to: 9, offset: 10 }
 * getPagination(1, 10) => { from: 10, to: 19, offset: 10 }
 * getPagination(2, 10) => { from: 20, to: 29, offset: 10 }
 */
export const getPagination = (
  page: Page = 0,
  offset: Offset = 10
): IPagination => {
  page = +page;
  offset = +offset;

  const from = page ? page * offset : 0;
  const to = page ? from + offset - 1 : offset - 1;

  return { from, to, offset };
};
