import { ListNode } from "../reverse-linked-list/reverseLinkedList";

/**
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has
 * Node.val == val, and return the new head.
 *
 * @see https://leetcode.com/problems/remove-linked-list-elements/
 */
export default function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  let dummyHead = new ListNode();
  dummyHead.next = head;

  let prevNode: ListNode | null = dummyHead;
  let currentNode: ListNode | null = head;

  while (currentNode) {
    // remove this node
    if (currentNode.val === val) {
      prevNode.next = currentNode.next;
    } else {
      prevNode = currentNode;
    }

    currentNode = currentNode.next;
  }

  return dummyHead.next;
}
