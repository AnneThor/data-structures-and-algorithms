'use strict';

const Tree = require('../../Data-Structures/tree/BinaryTree.js');
const TreeNode = require('../../Data-Structures/tree/TreeNode.js');

describe("Binary Tree MAX VALUE functionality", () => {

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

  test("that the findMax() method returns the largest value in the tree", () => {
    expect(oneNodeTree.findMax()).toEqual(50);
    expect(emptyTree.findMax()).toEqual(null);
    expect(fullTree.findMax()).toEqual(100);
    // going to fill a tree randomly to see if that will work
    emptyTree.add(3);
    emptyTree.add(32);
    emptyTree.add(72);
    emptyTree.add(31);
    emptyTree.add(1);
    expect(emptyTree.findMax()).toEqual(72);
  })

})
