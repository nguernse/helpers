import { BinarySearchTree } from "./binary-search-trees";

const tree = new BinarySearchTree([10, 6, 15, 3, 8, 20]);

console.log("10 in tree ?", tree.find(10), tree.has(10));
console.log("8 in tree ?", tree.find(8), tree.has(8));
console.log("7 in tree ?", tree.find(7), tree.has(7));

const bfsValues = tree.bfs();
console.log("BFS bfsValues", bfsValues);

const dfsPreorderValues = tree.dfsPreorder();
console.log("dfsPreorderValues", dfsPreorderValues);

const dfsPostOrderValues = tree.dfsPostOrder();
console.log("dfsPostOrderValues", dfsPostOrderValues);

const dfsInOrderValues = tree.dfsInOrder();
console.log("dfsInOrderValues", dfsInOrderValues);
