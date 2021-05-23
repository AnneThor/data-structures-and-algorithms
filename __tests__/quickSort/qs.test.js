'use strict'

const { quickSort, partition, swap } = require('../../challenges/quickSort/quickSort.js');


describe("quick SORT functionality", () => {

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
    quickSort(emptyArray);
    expect(emptyArray).toEqual([]);
  })

  test("that quick sort returns a properly sorted array", () => {
    quickSort(testArr, 0, testArr.length-1);
    expect(testArr).toEqual([4,8,15,16,23,42]);

    quickSort(reverseArr, 0, reverseArr.length-1);
    expect(reverseArr).toEqual([-2, 5, 8, 12, 18, 20]);

    quickSort(multiples, 0, multiples.length-1);
    expect(multiples).toEqual([5, 5, 5, 7, 7, 12]);

    quickSort(nearlySorted, 0, nearlySorted.length-1);
    expect(nearlySorted).toEqual([2, 3, 5, 7, 11, 13]);

  })

})
