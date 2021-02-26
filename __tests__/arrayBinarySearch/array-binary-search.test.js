'use strict';

let arrayBinarySearch = require('../../challenges/arrayBinarySearch/array-binary-search.js');

describe('Array Binary Search Functionality', () => {

  let testArray = [1,4,7,9,10,13,17,25,37,49,50];

  it('should return -1 if passed an empty array with a valid search value', () => {
    expect(arrayBinarySearch([], 10)).toEqual(-1);
  })

  it('should return 0 if passed a array length 1 containing the search value', () => {
    expect(arrayBinarySearch([4],4)).toEqual(0);
  })

  it('should return correctly find the index for values at the start/end indices', () => {
    expect(arrayBinarySearch(testArray, 1)).toBe(0);
    expect(arrayBinarySearch(testArray, 50)).toBe(testArray.length-1)
  })

  it('should return the correct index for any value in the array', () => {
    expect(arrayBinarySearch(testArray, 13)).toEqual(testArray.indexOf(13));
    expect(arrayBinarySearch(testArray, 49)).toEqual(testArray.indexOf(49));
  })

  it('should return -1 given a search value not contained in the array', () => {
    expect(arrayBinarySearch(testArray, 100)).toEqual(-1);
    expect(arrayBinarySearch(testArray, 6)).toEqual(-1);
  })

})
