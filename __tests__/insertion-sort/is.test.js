'use strict'

const insertionSort = require('../../challenges/insertionSort/insertionSort.js')

describe("INSERTION SORT functionality", () => {

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
    insertionSort(emptyArray);
    expect(emptyArray).toEqual([]);
  })

  test("that insertion sort returns a properly sorted array", () => {
    insertionSort(testArr);
    expect(testArr).toEqual([4,8,15,16,23,42]);

    insertionSort(reverseArr);
    expect(reverseArr).toEqual([-2, 5, 8, 12, 18, 20]);

    insertionSort(multiples);
    expect(multiples).toEqual([5, 5, 5, 7, 7, 12]);

    insertionSort(nearlySorted);
    expect(nearlySorted).toEqual([2, 3, 5, 7, 11, 13]);

  })

})
