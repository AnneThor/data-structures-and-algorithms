'use strict';

const BinarySearchTree = require('../../Data-Structures/tree/BinarySearchTree.js');
const BinaryTree = require('../../Data-Structures/tree/BinaryTree.js');
const TreeNode = require('../../Data-Structures/tree/TreeNode.js');

describe("BINARY SEARCH TREE functionality", () => {

  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  const fullTree = new BinarySearchTree();

  beforeEach(() => {
    oneNodeTree.root = new TreeNode(50);
    fullTree.root = new TreeNode(50);
    fullTree.root.left = new TreeNode(25);
    fullTree.root.right = new TreeNode(75);
    fullTree.root.left.right = new TreeNode(35);
    fullTree.root.left.left = new TreeNode(15);
    fullTree.root.right.right = new TreeNode(100);
  })

  afterEach(() => {
    fullTree.root = null;
    emptyTree.root = null;
    oneNodeTree.root = null;
  })

  test("that we can create a binary search tree", () => {
    const tree = new BinarySearchTree();
    expect(tree instanceof BinarySearchTree).toBeTruthy();
    expect(tree instanceof BinaryTree).toBeTruthy();
    expect(typeof tree).toEqual('object');
  })

  test("that we can add to a BST", () => {
    emptyTree.add(50);
    emptyTree.add(75);
    emptyTree.add(25);
    expect(emptyTree.inOrder()).toEqual([25,50,75]);
    expect(emptyTree.preOrder()).toEqual([50,25,75]);
    expect(emptyTree.postOrder(emptyTree.root)).toEqual([25,75,50])
    emptyTree.add(15);
    emptyTree.add(30);
    emptyTree.add(100);
    emptyTree.add(80);
    expect(emptyTree.inOrder()).toEqual([15, 25, 30, 50, 75, 80, 100]);
    expect(emptyTree.preOrder()).toEqual([50, 25, 15, 30, 75, 100, 80]);
    expect(emptyTree.postOrder(emptyTree.root)).toEqual([15, 30, 25, 80, 100, 75, 50])
  })

  test("that searching BST for a value it doesn't contain will return false", () => {
    expect(fullTree.contains(1000)).toBeFalsy();
    expect(fullTree.contains(1)).toBeFalsy();
    expect(emptyTree.contains(3000)).toBeFalsy();
    expect(oneNodeTree.contains(20)).toBeFalsy();
  })

  test("that searching a BST for a value it contains will return true", () => {
    expect(fullTree.contains(100)).toBeTruthy();
    expect(fullTree.contains(15)).toEqual(true);
    expect(oneNodeTree.contains(50)).toBeTruthy();
  })

})
