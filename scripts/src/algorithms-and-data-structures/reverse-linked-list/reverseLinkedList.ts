/**
 * Given the head of a singly linked list,
 * reverse the list, and return the reversed list.
 *
 * @see https://leetcode.com/problems/reverse-linked-list/
 */
export default function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}

export function recursiveReverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  return pureReverse(head, null);
}

function pureReverse(curr: ListNode, parent: ListNode | null): ListNode {
  const next = curr.next;

  curr = new ListNode(curr.val, parent);

  if (!next) return curr;

  return pureReverse(next, curr);
}

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor(values: number[] = []) {
    this.head = null;

    if (values.length) {
      let node = new ListNode(values[0]);
      this.head = node;

      for (let i = 1; i < values.length; i += 1) {
        node.next = new ListNode(values[i]);
        node = node.next;
      }
    }
  }
}
