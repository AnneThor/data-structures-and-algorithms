'use strict'

/**
 * mergeSort accepts an array of numbers, the lowest index and the
 * highest index and sorts the array in ascending value in place
 * @param {object} arr - an array of numerical values
 * @param {number} l - the lowest index in the array
 * @param {number} r - the highest index of the array
 **/

function mergeSort (arr, l, r) {
  if (l < r) {
    let m = l + Math.floor((r-l) / 2);
    mergeSort(arr, l, m)
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
  }
}

/**
 * merge function merges the subarrays back into one greater array
 * in proper ascending order; there is no return, the array is manipulated in
 * place
 * @param {object} arr - array of numerical values
 * @param {number} l - left index
 * @param {number} m - middle index
 * @param {number} r - right index
 **/
function merge(arr, l, m, r) {

  // copy the sub arrays into temporary new arrays
  let leftSide = arr.slice(l, m+1);
  let rightSide = arr.slice(m+1, r+1);

  // merge the temporary arrays

  // initial indexes of temporary arrays
  let i=0; let j=0;
  // initial index of merged array
  let k = l;

  // add the subarrays to the merged array in least to greatest
  // by going left to right through sub indexes (these were all
  // rebuilt in ascending order, so it works)
  while (i < leftSide.length && j < rightSide.length) {
    if (leftSide[i] <= rightSide[j]) {
      arr[k] = leftSide[i];
      i++;
    } else {
      arr[k] = rightSide[j];
      j++;
    }
    k++;
  }

  // after exiting loop, there may be additional elements on either the
  // l or r side that need to be added to merged array
  while (i < leftSide.length) {
    arr[k] = leftSide[i];
    i++; k++;
  }
  while (j < rightSide.length) {
    arr[k] = rightSide[j];
    j++; k++;
  }

}

module.exports = { mergeSort, merge };
