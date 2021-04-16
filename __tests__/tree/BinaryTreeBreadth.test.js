'use strict';

const Tree = require('../../Data-Structures/tree/BinaryTree.js');
const TreeNode = require('../../Data-Structures/tree/TreeNode.js');

describe("binary tree BREADTH functionality", () => {

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

  // full tree looks like:
  //        50
  //   25       75
  //15    35        100
  // breadth first should return [50,25,75,15,35,100];


  afterEach(() => {
    fullTree.root = null;
    emptyTree.root = null;
    oneNodeTree.root = null;
  })

  test("that breadth first returns an empty array on an empty tree", () => {
    expect(emptyTree.breadthFirst()).toEqual([]);
  })

  test("that breadth first returns just one value in an array on a single root tree", () => {
    expect(oneNodeTree.breadthFirst()).toEqual([50]);
  })

  test("that breadth first correctly traverses a full tree", () => {
    expect(fullTree.breadthFirst()).toEqual([50,25,75,15,35,100]);
  })


})
