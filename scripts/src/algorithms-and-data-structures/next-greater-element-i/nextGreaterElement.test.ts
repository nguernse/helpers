import nextGreaterElement from "./nextGreaterElement";

describe("nextGreaterElement", () => {
  it.each([
    { nums1: [4, 1, 2], nums2: [1, 3, 4, 2], output: [-1, 3, -1] },
    { nums1: [2, 4], nums2: [1, 2, 3, 4], output: [3, -1] },
    { nums1: [1, 3], nums2: [4, 3, 1, 2], output: [2, -1] },
  ])(
    "nextGreaterElement($nums1, $nums2) -> $output",
    ({ nums1, nums2, output }) => {
      const result = nextGreaterElement(nums1, nums2);

      expect(result).toEqual(output);
    }
  );
});
