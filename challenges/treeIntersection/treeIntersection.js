'use strict'

const binaryTree = require('../../Data-Structures/tree/BinaryTree.js')
const ht = require('../../Data-Structures/hashTable/hashTable.js')

/**
 *  Tree Intersection accepts two binary trees as inputs
 * and returns an array of values representing the set of
 * numbers that are contained in both input trees
 * @param {object} treeA - the first binary tree
 * @param {object} treeB - the second binary tree
 * @return {object} - an array of the set of numbers that
 * exist in both input trees
 **/
function treeIntersection(treeA, treeB) {
  if (!treeA.root || !treeB.root) {
    return []
  }
  // make a ht of the first tree
  let treeAMap = new ht(120);
  // iterate over trees and count valus
  treeAMap = toMap(treeA.root, treeAMap);
  let overlapArray = sameValues(treeB.root, treeAMap, [])
  return overlapArray;
}

/**
 * Add values that are in both sets to an array
 * of shared values, return the array
 * @param {object} node - root of tree
 * @param {object} map - hashtable to compare against
 * @param {object} values - an empty array that values
 * found in both trees are added to
 * @return the values array filled with all numbers found
 * in both trees
 **/
 function sameValues(node, map, values) {
   if (!node) { return values }
   let value = node.value.toString();
   if (map.contains(value)) {
     values.push(parseInt(value))
   }
   if (node.left) { sameValues(node.left, map, values) }
   if (node.right) { sameValues(node.right, map, values) }
   return values
 }

/**
 * The to map functions traverses an input binary tree in order
 * and adds the value to a map
 * @param {object} node - head node of a binary tree object
 * @param {object} map - the map to add the values to
 * @return {object} - returns the map objects updated with the
 * unique values found in the tree
 **/
function toMap(node, map) {
  if (!node) { return map }
  let value = node.value.toString();
  if (!map.contains(value)) {
    map.add(value)
  }
  if (node.left) { toMap(node.left, map) }
  if (node.right) { toMap(node.right, map) }
  return map;
}

module.exports = {
  treeSet: treeIntersection
};
