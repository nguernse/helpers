import { LinkedList } from "../reverse-linked-list/reverseLinkedList";
import middleNode from "./middleLinkedList";

describe("Middle Linked List", () => {
  it.each([
    { input: [1], output: 1 },
    { input: [1, 2], output: 2 },
    { input: [1, 2, 3], output: 2 },
    { input: [1, 2, 3, 4, 5, 6], output: 4 },
  ])("reverseList($input) => $output", ({ input, output }) => {
    const LL = new LinkedList(input);
    const result = middleNode(LL.head);

    expect(result?.val).toBe(output);
  });
});
