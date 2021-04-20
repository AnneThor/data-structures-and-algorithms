const Node = require ('../../Data-Structures/tree/TreeNode.js');
const BinaryTree = require('../../Data-Structures/tree/BinaryTree.js');


/**
 * The main FizzBuzzTree function accepts a tree and passes the root to
 * a helper function which processes the logic for cloning the tree
 * and processing it's data using FizzBuzz logic
 * @param {object} tree - k-ary tree
 * @return {object} tree - k-ary clone tree with fizzbuzz translation
 */
 function FizzBuzzTree(tree) {
   if (!tree.root) { return null }
   let fbTree = new BinaryTree();
   fbTree.root = FizzBuzzTreeHelper(tree.root);
   return fbTree;
 }

/**
 * The FizzBuzz helper function accepts a k-ary tree node as an input and
 * returns a new tree that has the same structure of the original tree, but
 * with contents adjusted using the fizzBuzz helper function
 * @param {object} node - kary tree root to duplicate
 * @return {object} - a duplicate tree with node contents adjusted by the
 * fizzBuzz helper function
 */
function FizzBuzzTreeHelper(node) {
  if (!node) { return null };
  let rootClone = new Node(fizzBuzz(node));
  node.children.forEach(child => {
    rootClone.children.push((FizzBuzzTreeHelper(child)));
  })
  return rootClone;
}

/**
 * A helper function that accepts a number value and returns the following:
 * if input divisibly by 15, returns "FizzBuzz"
 * if input is divisible by 5, return "Buzz"
 * if input is divisible by 3, return "Fizz"
 * if none of the above, return the contents as a String
 * @param {number} value - number value
 * @return {string} - FizzBuzz, Fizz, Buzz, or string representation of original
 * input
 */
function fizzBuzz(node) {
  if (!node) { return }
  value = node.value;
  switch (true) {
    case value % 15 === 0:
      return "FizzBuzz"
    case value % 5 === 0:
      return "Buzz"
    case value % 3 === 0:
      return "Fizz"
    default:
      return value.toString();
  }
}


module.exports = { FizzBuzzTree, FizzBuzzTreeHelper };
