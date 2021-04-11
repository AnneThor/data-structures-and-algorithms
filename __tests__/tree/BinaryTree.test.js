'use strict';

const Tree = require('../../Data-Structures/tree/BinaryTree.js');
const TreeNode = require('../../Data-Structures/tree/TreeNode.js');

describe(" BINARY TREE functionality", () => {

  const emptyTree = new Tree();
  const oneNodeTree = new Tree();
  const fullTree = new Tree();

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

  test("that we can successfully instantiate an empty Tree", () => {
    const newTree = new Tree();
    expect(newTree).toBeTruthy();
    expect(newTree.root).toEqual(null);
    expect(newTree instanceof Tree).toEqual(true);
  });

  test("that we can instantiate a Tree with one node", () => {
    emptyTree.add(1);
    expect(emptyTree.root).not.toEqual(null);
    expect(emptyTree.root.value).toEqual(1);
    expect(emptyTree.root.left).toEqual(null);
    expect(emptyTree.root.right).toEqual(null);
  })

  test("that we can add a left child properly in a Tree", () => {
    oneNodeTree.add(20);
    expect(oneNodeTree.toString()).toEqual('20 50');
    expect(oneNodeTree.root.left).toBeTruthy();
    expect(oneNodeTree.root.right).toBeFalsy();
    expect(oneNodeTree.root.left.value).toEqual(20);
  })

  test("that we can add a right child properly in a Tree", () => {
    oneNodeTree.add(20);
    oneNodeTree.add(75);
    expect(oneNodeTree.root.right).toBeTruthy();
    expect(oneNodeTree.root.left).toBeTruthy();
    expect(oneNodeTree.toString()).toEqual('20 50 75');
    expect(oneNodeTree.root.right.value).toEqual(75);
  })

  test("that we can successfully fill a Tree", () => {
    oneNodeTree.add(25);
    oneNodeTree.add(75);
    expect(oneNodeTree.root.right.value).toEqual(75);
    expect(oneNodeTree.root.left.value).toEqual(25);
    oneNodeTree.add(20);
    oneNodeTree.add(30);
    expect(oneNodeTree.root.left.left.value).toEqual(20);
    expect(oneNodeTree.root.left.right.value).toEqual(30);
    oneNodeTree.add(15);
    expect(oneNodeTree.root.right.left.value).toEqual(15);
    expect(oneNodeTree.toString()).toEqual('20 25 30 50 15 75')
  })

  test("that contains will return false if a Tree doesn't contain a value", () => {
    expect(fullTree.contains(666)).toBeFalsy();
    expect(fullTree.contains(66)).toBeFalsy();
  })

  test("that contains will return true if a Tree does contain a value", () => {
    expect(fullTree.contains(50)).toBeTruthy();
    expect(fullTree.contains(100)).toBeTruthy();
    expect(fullTree.contains(15)).toBeTruthy();
  })

  test("that pre order traversal will correctly return", () => {
    // full tree pre order is 50 25 15 35 75 100
    expect(fullTree.preOrder()).toEqual([50, 25, 15, 35, 75, 100]);
    expect(emptyTree.preOrder()).toEqual([]);
    expect(oneNodeTree.preOrder()).toEqual([50]);
  })

  test("that in order traversal will correctly return", () => {
    // full tree in order is 15 25 35 50 75 100
    expect(fullTree.inOrder()).toEqual([15, 25, 35, 50, 75, 100]);
    expect(emptyTree.inOrder()).toEqual([]);
    oneNodeTree.add(1);
    oneNodeTree.add(3);
    expect(oneNodeTree.inOrder()).toEqual([1,50,3]);
  })

  test("that post order traversal will correctly return", () => {
    // full tree post order is 15 35 25 100 75 50
    expect(fullTree.postOrder()).toEqual([15, 35, 25, 100, 75, 50]);
    expect(emptyTree.postOrder()).toEqual([]);
    oneNodeTree.add(1);
    oneNodeTree.add(3);
    oneNodeTree.add(5);
    oneNodeTree.add(7);
    oneNodeTree.add(9);
    expect(oneNodeTree.postOrder()).toEqual([5,7,1,9,3,50]);
  })

})
