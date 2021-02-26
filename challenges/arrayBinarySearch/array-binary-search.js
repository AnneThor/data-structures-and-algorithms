'use strict';

/**
* Preforms a binary search on a sorted array given the search values
* Returns the index of the search value or -1 if the value is not found in the input arrayShift
* @param {Array.<Number>} arr - a sorted array of numbers ascending order
* @param {Number} val - a number value to search for
*/

module.exports = (arr, val) => {
  let low = 0;
  let high = arr.length-1;
  while (low <= high) {
    let mid = Math.floor((low+high)/2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      low = mid+1;
    } else {
      high = mid-1;
    }
  }
return -1
}
