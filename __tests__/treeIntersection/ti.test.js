'use strict';

const Tree = require('../../Data-Structures/tree/BinaryTree.js');
const TreeNode = require('../../Data-Structures/tree/TreeNode.js');
const { treeSet } = require('../../challenges/treeIntersection/treeIntersection.js');

describe("TREE INTERSECTION functionality", () => {

  const emptyTree = new Tree();
  const oneNodeTree = new Tree();
  const treeA = new Tree();
  const treeB = new Tree();

  beforeEach(() => {
    oneNodeTree.root = new TreeNode(16);
    treeA.root = new TreeNode(50);
    treeA.root.left = new TreeNode(25);
    treeA.root.right = new TreeNode(75);
    treeA.root.left.right = new TreeNode(35);
    treeA.root.left.left = new TreeNode(15);
    treeA.root.right.right = new TreeNode(100);
    treeB.root = new TreeNode(5);
    treeB.root.left = new TreeNode(25);
    treeB.root.right = new TreeNode(16);
    treeB.root.left.right = new TreeNode(80);
    treeB.root.left.left = new TreeNode(15);
    treeB.root.right.right = new TreeNode(35);
  })

  afterEach(() => {
    treeA.root = null;
    treeB.root = null;
    emptyTree.root = null;
    oneNodeTree.root = null;
  })

  test("if either tree is empty, the function returns an empty array", () => {
    expect(treeSet(treeA, emptyTree)).toEqual([]);
    expect(treeSet(emptyTree, treeB)).toEqual([]);
  });

  test("test that if we inspect two trees with no common values we get an empty array", () => {
    expect(treeSet(oneNodeTree, treeA)).toEqual([])
  })

  test("that we get a proper Set of numbers contained in each tree", () => {
    expect(treeSet(oneNodeTree, treeB)).toEqual([16]);
    expect(treeSet(treeB, oneNodeTree)).toEqual([16]);
    expect(treeSet(treeA, treeB)).toEqual([25, 15, 35])
  })

})
