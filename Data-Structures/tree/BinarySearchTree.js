'use strict';

const TreeNode = require('./TreeNode.js');
const BinaryTree = require('./BinaryTree.js');

/**
 * The BinarySearchTree class creates binary trees that are composed
 * of TreeNodes and includes methods to add, delete and traverse
 * in various orders (pre, in, post). The generic BinaryTree class
 * fills the tree using a value sort method, saving to a left leaf
 * if the value is lower and to the right leaf if value is greater.
 * The generic BST does not do any self balancing.
 */
class BinarySearchTree extends BinaryTree {

  /**
   * Method to add a value to the BST that will sort it
   * according to value
   * @param {*} value - value too add to the tree
   */
  add(value) {
    if (this.root === null) {
      this.contents++;
      this.root = new TreeNode(value);
      return;
    }
    this.addBinary(this.root, value);
  };

  /**
   * Helper method that properly inserts the node into the Binary
   * Search Tree in the proper value sorted order
   * @param {object} node - root node to test for placement
   * @param {*} value - new value that is being placed in tree
   * @return {object} newly created node
   */
  addBinary(node, value) {
    if (node === null) {
      this.contents++;
      return new TreeNode(value);
    } else if (value < node.value) {
      node.left = this.addBinary(node.left, value);
    } else {
      node.right = this.addBinary(node.right, value);
    }
    return node;
  };

  /**
   * Method that does a breath first search of the tree using a queue
   * to return a boolean representing whether or not the value was
   * found in the tree
   * @param {*} value - value to be searched for in the tree
   * @return {boolean} - representing if the value was found in the tree
   */
  contains(value) {
    if (this.root === null) { return false; }
    const _helper = (node, value) => {
      if (node.value === value) {
        return true;
      }
      if (node.value < value) {
        if (node.right === null) {
          return false;
        } else {
          return _helper(node.right, value);
        }
      }
      if (node.value > value) {
        if (node.left === null) {
          return false;
        } else {
          return _helper(node.left, value);
        }
      }
    }
    return _helper(this.root, value);
  }

}

module.exports = BinarySearchTree;
