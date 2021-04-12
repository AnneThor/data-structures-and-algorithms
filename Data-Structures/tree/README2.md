# Binary Tree Maximum

## Challenge Description

Create a method, here it is called ```findMax``` that returns the greatest value in a binary tree; the assumption is that the binary tree will hold only numerical values

## Approach & Efficiency

I used a recursive approach to this problem, which recursively finds the max value in the left child, the max value in the right child and then compares to the root value. My implementation returns null if an empty root node is provided.

Big O(time) = O(n) it traverses every node in the tree because values are stored in my binary tree implementation to fill the tree level by level with no respect to sorting at insertion

Big O(space) = O(h) the maximum number of calls on the stack at any given time is equal to the height of the tree

## WHITEBOARD

![Whiteboard for Binary Tree Max](../../assets/binary-tree-max)
