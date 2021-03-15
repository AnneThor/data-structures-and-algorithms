'use strict';

const linkedList = require('./linked-list.js');

/**
* Accepts as inputs two sorted linked lists (integer values, least to greatest)
* and returns one linked list composed of the nodes in order
* "{ llOneNode1 } -> { llTwoNode1 } -> { llOneNode2 } -> { llTwoNode2} --> ...."
* @param {Object} listOne - a linked list object containing ascending sorted number values
* @param {Object} listTwo - a linked list object containing ascending sorted number values
* @return {Object} - a single linked list object with sorted
*/

const zipSort = (listOne, listTwo) => {
  // Edge cases: 1 or 2 empty list inputs
  if (listOne.length === 0) { return listTwo; }
  if (listTwo.length === 0) { return listOne; }
  if (listOne.length === 0 && listTwo.length === 0) { return listOne; }

  let sortedList = new linkedList();

  while (listOne.head && listTwo.head) {
    let firstList = listOne.head.value < listTwo.head.value ? listOne : listTwo;
    let minVal = firstList.head.value;
    sortedList.append(minVal);
    firstList.delete(minVal);
  }

  let curr = sortedList.head;
  while (curr.next) {
    curr = curr.next;
  }
  if (listOne.head === null) {
    sortedList.length += listTwo.length;
    curr.next = listTwo.head;
  } else  {
    // listTwo is empty and we have to add listOne
    sortedList.length += listOne.length;
    curr.next = listOne.head;
  }

  return sortedList;
}

module.exports = zipSort;
