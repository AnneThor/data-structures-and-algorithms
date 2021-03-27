'use strict';

const linkedList = require('./linked-list.js');

const isPalindrome = (ll) => {
  if (ll.head === null) { return false }

  // i know the length of the ll linkedlist.length
  let arrayReverse = [];
  let currNode = ll.head;

  for ( let i=1; i <= ll.length; i++ ) {
    arrayReverse[ll.length-i] = currNode.value;
    if (currNode.next) { currNode = currNode.next }
  }

  console.log("ARRAY REVERSE", arrayReverse);

  // theoretically now i have an array holding the reverse

  currNode = ll.head;

  for (let i =0; i <arrayReverse.length; i++) {
    if (currNode.value !== arrayReverse[i]) {
      return false
      }
    if (currNode.next) {currNode = currNode.next};
    }
    return true;
}

module.exports = isPalindrome;
