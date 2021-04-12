'use strict';

const TreeNode = require('./TreeNode.js');
const Queue = require('../stacks-and-queues/queue.js');


/**
 * The BinaryTree class creates binary trees that are composed
 * of TreeNodes and includes methods to add, delete and traverse
 * in various orders (pre, in, post). The generic BinaryTree class
 * fills the tree from left to right with no value based sorting
 */

class BinaryTree {

  /**
   * Creates a new BinaryTree object, instantiates with no parameters
   * and starts wiht a null root and a content value = 0
   */
  constructor() {
    this.root = null;
    this.contents = 0;
  }

  /**
   * Method that adds a new Tree Node containing a given value to the tree
   * in the first empty child node location left to right (no sorting applied)
   * @param {*} value - value to add to the tree
   * @return {object} - returns the TreeNode object that is the root of the tree
   */
  add(value) {
    if (this.root === null) {
      this.contents++;
      this.root = new TreeNode(value);
      return;
    }
    // breadth first to look for an empty child
    let q = new Queue();
    q.enqueue(this.root);
    let temp;
    while (q.isEmpty() === false) {
      temp = q.dequeue();
      if (temp.left === null) {
        temp.left = new TreeNode(value);
        this.contents++;
        return this.root;
      }
      if (temp.left !== null) {
        q.enqueue(temp.left);
      }
      if (temp.right === null) {
        temp.right = new TreeNode(value);
        this.contents++;
        return this.root;
      }
      if (temp.right !== null) {
        q.enqueue(temp.right);
      }
    }
  }

  /**
   * Method that does a breath first search of the tree using a queue
   * to return a boolean representing whether or not the value was
   * found in the tree
   * @param {*} value - value to be searched for in the tree
   * @return {boolean} - representing if the value was found in the tree
   */
  contains(value) {
    if (this.root === null) { return false; }
    let q = new Queue();
    q.enqueue(this.root);
    let temp;
    while (q.isEmpty() === false) {
      temp = q.dequeue();
      if (temp.value === value) {
        return true;
      }
      if (temp.left !== null && temp.left.value === value) {
        return true;
      } else if (temp.left !== null) {
        q.enqueue(temp.left)
      }
      if (temp.right !== null && temp.right.value === value) {
        return true;
      } else if (temp.right !== null) {
        q.enqueue(temp.right);
      }
    }
    return false;
  }

  /**
  * Removes a node with the given value from the Binary Tree
  * @param {*} value - value to remove from the Binary Tree
  * @return {object} root - the root of the Binary Tree
  */
  remove(value) {
    // handle edge cases
    if (this.root === null) {
      return this.root;
    } else if (this.root.right === null && this.root.left === null) {
      if (this.root.value === value) {
        return null
      } else {
        return this.root
      };
    }

    // find deepest rightmost node
    let arr = this.inOrder();
    let exchangeNode = arr[arr.length-1];

    // find the node to remove
    let deleteNode = this.findNode(value);

    // save the value from exchange node to reassign later
    replacementValue = exchangeNode.value;

    // delete deepest, rightmost node
    this.deleteDeepest(this.root, exchangeNode);

    //reassign the value to the node we found
    deleteNode.value = replacementValue;

  }

  /**
   * Helper method for delete function, finds and returns
   * the node with the given value (or null if not found)
   * @param {*} value - value tree is being searched for
   * @return {object} - TreeNode if found or null
   */
  findNode(value) {
    let q = new Queue();
    q.enqueue(this.root);
    let temp;
    while(q.isEmpty() === false) {
      temp = q.dequeue();
      if (temp.value === value) {
        return temp;
      }
      if (temp.left !== null) {
        q.enqueue(temp.left);
      }
      if (temp.right !== null) {
        q.enqueue(temp.right);
      }
    }
  }

  /**
   * Helper method for delete that takes in the root and node
   * to delete and returns the updated root
   * We are deleting the deepest, rightmost node
   * @param {object} root - root of the tree
   * @param {object} deleteNode - node to be deleted
   */
  deleteDeepest(root, deleteNode) {
    let q = new Queue();
    q.enqueue(root);
    let temp;
    while (q.isEmpty() === false) {
      temp = q.dequeue();
      if (temp.left !== null && temp.value.left === replacementValue) {
        temp.left = null;
        return;
      } else if (temp.left !== null) {
        q.enqueue(temp.left);
      }
      if (temp.value.right !== null && temp.value.right === replacementValue) {
        temp.right = null;
        return;
      } else if (temp.right !== null) {
        q.enqueue(temp.right);
      }
    }
  }

  /**
   * Method that returns the tree contents in PRE order
   * @return {object} - an array containing the values of the tree in PRE order
   */
  preOrder() {
    if (this.root === null) { return [] };
    let nodes = [];
    let helper = (node) => {
      nodes.push(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(this.root);
    return nodes;
  }

  /**
   * Method that returns the tree contents in order
   * @return {object} - an array containing the values of the tree in order
   */
   inOrder() {
     if (this.root === null) { return [] };
     const _helper = (node, nodes = []) => {
       if (node === null) { return nodes };
       if (node.left !== null) { _helper(node.left, nodes) };
       nodes.push(node.value);
       if (node.right !== null) { _helper(node.right, nodes) };
       return nodes;
     }
    return _helper(this.root);
   }


  /**
   * Method that returns the tree contents in POST order
   * @return {object} - an array containing the values of the tree in POST order
   */
  postOrder() {
    if (this.root === null) { return [] };
    const _helper = (node, nodes=[]) => {
      if (node === null) { return nodes };
      if (node.left) { _helper(node.left, nodes) };
      if (node.right) { _helper(node.right, nodes) };
      nodes.push(node.value);
      return nodes;
    }
    return _helper(this.root);
  }

  /**
   * Method that finds and returns the greatest value held in the tree
   * or null if the tree is empty
   * @return {*} - the numerical greatest value in the tree or null if it is
   * empty
   */
   findMax() {
      if (this.root === null) { return null; }
      // return max of left, right and root
      const _helper = (node) => {
        if (node === null) { return }
        let maxVal = node.value;
        let leftMax = _helper(node.left);
        let rightMax = _helper(node.right);
        if (leftMax > maxVal) {
          maxVal = leftMax;
        }
        if (rightMax > maxVal) {
          maxVal = rightMax;
        }
        return maxVal;
      }
      return _helper(this.root);
   }



  /**
   * Method that returns the tree values in a string in order
   * @return {string} - a string listing tree contents in order
   */
  toString(str = '') {
    return this.inOrder().join(' ');
  }

}

module.exports = BinaryTree;
