'use strict';

const linkedList = require('./linked-list.js');

/**
* Accepts as inputs two linked lists and returns one linked list composed of alternating
* nodes from the input linked lists
* "{ llOneNode1 } -> { llTwoNode1 } -> { llOneNode2 } -> { llTwoNode2} --> ...."
* @param {Object} listOne - a linked list object
* @param {Object} listTwo - a linked list object
* @return {Object} - a single linked list object
*/
const zip = (listOne, listTwo) => {
  // Edge cases: 1 or 2 empty list inputs
  if (listOne.length === 0) { return listTwo; }
  if (listTwo.length === 0) { return listOne; }
  if (listOne.length === 0 && listTwo.length === 0) { return listOne; }

  let currOne = listOne.head;

  //for lists of equal size or LL1.length > LL2.length
  if (listOne.length >= listTwo.length) {
    while (listTwo.head) {
      listOne.insertAfter(currOne.value, listTwo.head.value);
      currOne = currOne.next.next;
      listTwo.delete(listTwo.head.value);
    }
  } else {
  //listTwo is the longer list
    while (currOne.next) {
      listOne.insertAfter(currOne.value, listTwo.head.value);
      currOne = currOne.next.next;
      listTwo.delete(listTwo.head.value);
    }
    listOne.length += listTwo.length;
    currOne.next = listTwo.head;
  }

  console.log(listOne.toString());

  return listOne;
}

module.exports = zip;
