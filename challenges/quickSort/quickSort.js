'use strict';


/**
 * Quick Sort is a divide and conquer algorithm that accepts
 * an array of numerical values (must be all numerical values)
 * and returns the array sorted in ascending order
 * @param {object} arr - an array of numerical values
 * @return {object} arr - the same array sorted in asccending order
 **/
function quickSort(arr, low, high) {
  if (low < high) {
    // we start by taking the last index and moving it
    // to it's correct place in the array (w/ smaller
    // values to the left and larger to the right)
    let pivot = partition(arr, low, high);
    // this returns the new pivot and sorts the L/R sides
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }
  return arr;
}

/**
 * Partition is a helper function to quick sort. This function takes
 * as inputs the array and the low/high index of the portion to be
 * sorted. It modifies the array in place and returns the updated
 * pivot to pass to L/R sides to finish the sorting
 * @param {object} arr - array of numerical values to sort
 * @param {number} low - integer value of low index to sort
 * @param {number} high - integer value of high index to sort
 **/
function partition(arr, low, high) {
  let pivot = arr[high];

  // index of smaller element, indicates correct position of pivot so far
  // i.e. the last position where the pivot is larger than the value at this index
  // at the end, we will swap the pivot with i + 1
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  // insert the pivot back to where it belongs
  swap(arr, i + 1, high);
  // return the new pivot (the index where the original pivot ended)
  // this value will be passed to the L and R side sorting pass
  return i + 1;
}


/**
 * Swap function takes in an array and two integer values and returns
 * the array with the value at [i] and [j] swapped
 * @param {object} arr - the array to swap values in
 * @param {number} i - integer value of first index to swap
 * @param {number} j - integer value of second index to swap
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

module.exports = {
  quickSort: quickSort,
  partition: partition,
  swap: swap
}
