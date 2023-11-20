class ListNode {
  data: any;
  next: undefined | ListNode;

  constructor(data: any) {
    this.data = data;
    this.next = undefined;
  }
}

class LinkedList {
  head: undefined | ListNode;

  constructor(nodes?: any[]) {
    this.head = undefined;

    if (nodes) {
      let node = new ListNode(nodes.shift());
      this.head = node;

      while (nodes.length > 0) {
        node.next = new ListNode(nodes.shift());
        node = node.next;
      }
    }
  }

  addFirst(node: ListNode) {
    node.next = this.head;
    this.head = node;
  }

  addLast(node: ListNode) {
    if (this.head === undefined) {
      this.head = node;
      return;
    }

    let last_node = this.head;

    while (last_node.next) {
      last_node = last_node.next;
    }

    last_node.next = node;
  }

  addBefore(targetData: any, new_node: ListNode) {
    if (this.head === undefined) {
      throw new Error("List is empty");
    }

    if (this.head.data === targetData) {
      return this.addFirst(new_node);
    }

    let prev_node = this.head;

    while (prev_node.next) {
      let node = prev_node.next;

      if (node.data === targetData) {
        prev_node.next = new_node;
        new_node.next = node;

        return;
      }

      prev_node = node;
    }

    throw new Error(`Target data ${targetData} not found`);
  }

  addAfter(targetData: any, new_node: ListNode) {
    if (this.head === undefined) {
      throw new Error("List is empty");
    }

    let node = this.head;

    while (true) {
      if (node.data === targetData) {
        new_node.next = node.next;
        node.next = new_node;
        return;
      }

      if (node.next === undefined) break;

      node = node.next;
    }

    throw new Error(`Target data ${targetData} not found`);
  }

  removeNode(targetData: any) {
    if (this.head === undefined) {
      throw new Error("List is empty");
    }

    if (this.head.data === targetData) {
      this.head = this.head.next;
      return;
    }

    let previous_node = this.head;

    while (previous_node.next) {
      let node = previous_node.next;

      if (node.data === targetData) {
        previous_node.next = node.next;
        return;
      }

      previous_node = node;
    }

    throw new Error(`Target data ${targetData} not found`);
  }

  toString() {
    let result = "";

    let node = this.head;

    if (node === undefined) {
      result = "None";
    } else {
      while (true) {
        result += `${node.data} -> `;

        if (!node.next) break;
        node = node.next;
      }

      result += "None";
    }

    return result;
  }
}

const LL = new LinkedList(["a", "b", "c"]);

LL.addFirst(new ListNode("3"));
LL.addFirst(new ListNode("2"));
LL.addFirst(new ListNode("1"));

LL.addLast(new ListNode("d"));
LL.addLast(new ListNode("e"));
LL.addLast(new ListNode("f"));

LL.addBefore("1", new ListNode("0"));
LL.addBefore("f", new ListNode("F"));

LL.addAfter("f", new ListNode("g"));
LL.addAfter("g", new ListNode("h"));

LL.removeNode("0");
LL.removeNode("b");
LL.removeNode("3");

console.log(LL.toString());
