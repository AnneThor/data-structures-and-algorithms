'use strict';

/**
* Preforms a binary search recursively on a sorted array given the search values
* Returns the index of the search value or -1 if the value is not found in the input arrayShift
* @param {Array.<Number>} arr - a sorted array of numbers ascending order
* @param {Number} val - a number value to search for
*/
module.exports = (arr, val) => {
    let low = 0;
    let high = arr.length-1;
    return binaryExit(low, high, val, arr);
}

/**
* helper function for the recursive method, inspects a shorter portion of the array
* @param {Number} low - current low index from the array
* @param {Number} high - current high index from the array
* @param {Number} val - search value
* @param {Array.<Number>} arr - the original input array
*/
function binaryExit(low, high, val, arr) {
  let mid = Math.floor((low+high)/2);
  if (arr[mid] === val) {
    return mid;
  } else if (high <= low) {
    return -1;
  } else if (arr[mid] < val) {
    return binaryExit(mid+1, high, val, arr);
  } else { //value is in lower half of array
    return binaryExit(low, mid-1, val, arr);
  }
}
