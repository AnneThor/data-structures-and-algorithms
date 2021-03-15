'use strict';

const linkedList = require('../../Data-Structures/linkedList/linked-list.js');
const zip = require('../../Data-Structures/linkedList/zip.js');
const zipSort = require('../../Data-Structures/linkedList/zip-sort.js');

describe("LINKED LIST extended functionality", () => {

  let testListOne = new linkedList();
  let testListTwo = new linkedList();
  let testListThree = new linkedList();
  let tlFour = new linkedList();
  let tlFive = new linkedList();
  let inputs = [0,2,4,6,8];
  let inputsTwo = [1,3,5,7,9];
  let inputsThree = ['a','b','c'];
  let inFour = [1,6,8,11,45];
  let inFive = [0,2,3,4,99];


  beforeEach(() => {
    testListOne.head = null;
    testListTwo.head = null;
    testListTwo.length = 0;
    testListTwo.length = 0;
    inputs.forEach(item => {
      testListOne.append(item);
    });
    // listOne is 0->2->4->6->8
    inputsTwo.forEach(item => {
      testListTwo.append(item);
    })
    // listTwo 1->3->5->7->9
    testListThree.head = null;
    testListThree.length = 0;
    inputsThree.forEach(item => {
      testListThree.append(item);
    });
    // listThree is a -> b -> c
    tlFour.head = null;
    tlFour.length = 0;
    inFour.forEach(item => {
      tlFour.append(item);
    })
    // list four is 1->6->8->11->45
    tlFive.head = null;
    tlFive.length = 0;
    inFive.forEach(item => {
      tlFive.append(item);
    })
    // list five is 0->2->3->4->99
  });

  afterEach(() => {
    testListOne.head = null;
    testListOne.length = 0;
    testListTwo.head = null;
    testListTwo.length = 0;
    testListThree.head = null;
    testListThree.length = 0;
    tlFour.head = null;
    tlFive.head = null;
    tlFive.length = 0;
  })

  test('zip method properly combines two equal length linked lists', () => {
    let lengthOne = testListOne.length;
    let lengthTwo = testListTwo.length;
    let newList = zip(testListOne, testListTwo);
    expect(newList.length).toEqual(lengthOne + lengthTwo);
    expect(newList.head.value).toEqual(testListOne.head.value);
    expect(newList.head.next.value).toEqual(1);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next.value).toEqual(3);
  });

  test('zip method properly combines when listOne is longer than listTwo', () => {
    let lengthOne = testListOne.length;
    let lengthTwo = testListThree.length;
    let newList = zip(testListOne, testListThree);
    //expect 0 -> a -> 2 -> b -> 4 -> c -> 6-> 8
    expect(newList.length).toEqual(lengthOne + lengthTwo);
    expect(newList.head.value).toEqual(testListOne.head.value);
    expect(newList.head.next.value).toEqual('a');
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next.value).toEqual('b');
  })

  test('zip method properly combines when listTwo is longer than listOne', () => {
    let lengthOne = testListOne.length;
    let lengthTwo = testListThree.length;
    let newList = zip(testListThree, testListOne);
    //expect a -> 0 -> b -> 2 -> c -> 4 -> 6 -> 8
    expect(newList.length).toEqual(lengthOne + lengthTwo);
    expect(newList.head.value).toEqual(testListThree.head.value);
    expect(newList.head.next.value).toEqual(0);
    expect(newList.head.next.next.value).toEqual('b');
    expect(newList.head.next.next.next.value).toEqual(2);
  })

  test('zip sort properly combines two equal length lists', () => {
    let length = tlFour.length;
    let lengthTwo = tlFive.length;
    let newList = zipSort(tlFour, tlFive);
    // 0->1->2->3->4->6->8->11->45->99
    expect(newList.length).toEqual(length + lengthTwo);
    expect(newList.head.value).toEqual(0);
    expect(newList.head.next.value).toEqual(1);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next.value).toEqual(3);
    expect(newList.head.next.next.next.next.value).toEqual(4);
    expect(newList.head.next.next.next.next.next.value).toEqual(6);
  })

  test('zip sort properly combines when listOne is longer than listTwo', () => {
    tlFour.delete(6);
    tlFour.delete(45);
    let length = testListOne.length;
    let lengthTwo = tlFour.length;
    let newList = zipSort(testListOne, tlFour);
    // 0->1->2->4->6->8->8->11
    expect(newList.length).toEqual(length + lengthTwo);
    expect(newList.head.value).toEqual(0);
    expect(newList.head.next.value).toEqual(1);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next.value).toEqual(4);
    expect(newList.head.next.next.next.next.value).toEqual(6);
    expect(newList.head.next.next.next.next.next.value).toEqual(8);
    expect(newList.head.next.next.next.next.next.next.value).toEqual(8);
  })

  test('zip sort properly combines when listTwo is longer than listOne', () => {
    tlFour.delete(6);
    tlFour.delete(45);
    let length = testListOne.length;
    let lengthTwo = tlFour.length;
    let newList = zipSort(tlFour, testListOne);
    // 0->1->2->4->6->8->8->11
    expect(newList.length).toEqual(length + lengthTwo);
    expect(newList.head.value).toEqual(0);
    expect(newList.head.next.value).toEqual(1);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next.value).toEqual(4);
    expect(newList.head.next.next.next.next.value).toEqual(6);
    expect(newList.head.next.next.next.next.next.value).toEqual(8);
    expect(newList.head.next.next.next.next.next.next.value).toEqual(8);
  })

})
