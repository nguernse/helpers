import { ListNode } from "../reverse-linked-list/reverseLinkedList";

/**
 * Given the head of a singly linked list,
 * return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * @see https://leetcode.com/problems/middle-of-the-linked-list/
 */
export default function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
