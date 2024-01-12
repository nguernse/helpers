import reverseList, {
  LinkedList,
  recursiveReverseList,
} from "./reverseLinkedList";

describe("Reverse Linked List", () => {
  describe("iterative loop", () => {
    it.each([
      { input: [], output: [] },
      { input: [1], output: [1] },
      { input: [1, 2], output: [2, 1] },
      { input: [1, 2, 3], output: [3, 2, 1] },
    ])("reverseList($input) => $output", ({ input, output }) => {
      const LL = new LinkedList(input);
      const result = reverseList(LL.head);

      const newArr: number[] = [];
      let node = result;
      while (node) {
        newArr.push(node.val);
        node = node.next;
      }

      expect(newArr).toEqual(output);
    });
  });

  describe("recursive", () => {
    it.each([
      { input: [], output: [] },
      { input: [1], output: [1] },
      { input: [1, 2], output: [2, 1] },
      { input: [1, 2, 3], output: [3, 2, 1] },
    ])("recursiveReverseList($input) => $output", ({ input, output }) => {
      const LL = new LinkedList(input);
      const result = recursiveReverseList(LL.head);

      const newArr: number[] = [];
      let node = result;
      while (node) {
        newArr.push(node.val);
        node = node.next;
      }

      expect(newArr).toEqual(output);
    });
  });
});
