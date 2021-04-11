# Trees

Binary Tree: consists of TreeNodes with a left and right reference; nodes are added to the Binary Tree to fill the tree from right to left and keep the tree balanced

Binary Search Tree: consists of tree nodes, but values are sorted in reference to their parent node; larger values reside in right references, smaller values reside in the left references. The tree does not do any self balancing

## Challenge

Create a Binary Tree class and extend this into a Binary Search Tree class

## Approach & Efficiency

Methods that were implemented recursively (traversal methods of pre, in, post order, adding to BST, searching for value in BST) are all O(h) in terms of memory and space (the maximum space they will occupy on the call stack)

Methods that are iteratively implemented (adding to Binary Tree, searching for a value on the Binary Tree) are all O(width) at the widest level of the tree in terms of memory and constant in terms of space. I implemented an (untested) delete method on the Binary Tree, which requires breath searching multiple times, so that one will more time consuming.

## API

All methods are outlined in their JSDocs

[JS Docs - Tree Node](https://annethor.github.io/data-structures-and-algorithms/out/TreeNode.js.html)

[JS Docs - Binary Tree](https://annethor.github.io/data-structures-and-algorithms/out/BinaryTree.js.html)

[JS Docs - Binary Search Tree](https://annethor.github.io/data-structures-and-algorithms/out/BinarySearchTree.js.html)
