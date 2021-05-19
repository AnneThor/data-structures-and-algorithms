'use strict'

const { mergeSort } = require('../../challenges/mergeSort/mergeSort.js')
const { merge } = require('../../challenges/mergeSort/mergeSort.js')

describe("MERGE SORT functionality", () => {

  let testArr, reverseArr, multiples, nearlySorted, emptyArray;

  beforeEach(() => {
    testArr = [8,4,23,42,16,15];
    reverseArr = [20,18,12,8,5,-2];
    multiples = [5,12,7,5,5,7];
    nearlySorted = [2,3,5,7,13,11];
    emptyArray = [];
  })

  afterEach(() => {
  })

  test("that given an empty array, an empty array will return", () => {
    mergeSort(emptyArray);
    expect(emptyArray).toEqual([]);
  })

  test("that merge sort returns a properly sorted array", () => {
    mergeSort(testArr, 0, testArr.length);
    expect(testArr).toEqual([4,8,15,16,23,42]);

    mergeSort(reverseArr, 0, reverseArr.length);
    expect(reverseArr).toEqual([-2, 5, 8, 12, 18, 20]);

    mergeSort(multiples, 0, multiples.length-1);
    expect(multiples).toEqual([5, 5, 5, 7, 7, 12]);

    mergeSort(nearlySorted, 0, nearlySorted.length-1);
    expect(nearlySorted).toEqual([2, 3, 5, 7, 11, 13]);

  })

})
