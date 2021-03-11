'use strict';

const linkedList = require('../../Data-Structures/linkedList/linked-list.js');

describe("LINKED LIST extended functionality", () => {

  let testList = new linkedList();
  let inputs = [0,1,2,3,4,5,6,7];
  let newValue = 'addedValue';
  let newValueTwo = 'secondNewValue';

  beforeEach(() => {
    testList.head = null;
    testList.length = 0;
    inputs.forEach(item => {
      testList.insert(item);
      //results in 7->6->5->4->3->2->1->0
    })
  })

  afterEach(() => {
    testList.head = null;
    testList.length = 0;
  })

  test('length property on LL is working with all methods', () => {
    expect(testList.length).toEqual(8);
    testList.append(newValue);
    expect(testList.length).toEqual(9);
    testList.insert(newValueTwo);
    expect(testList.length).toEqual(10);
    testList.delete(newValue);
    expect(testList.length).toEqual(9);
    testList.insertBefore(5, newValue);
    expect(testList.length).toEqual(10);
    testList.insertAfter(5, newValueTwo);
    expect(testList.length).toEqual(11);
  });

  test('that the kth from end function throws on invalid inputs', () => {
    expect(() => { testList.kthFromEnd(10) }).toThrow();
    expect(() => { testList.kthFromEnd(8) }).toThrow();
    expect(() => { testList.kthFromEnd(-5) }).toThrow();
    let smallList = new linkedList().append(5);
    expect(() => { smallList.kthFromEnd(1) }).toThrow();
  })

  test('that the kth from end function properly functions with valid k', () => {
    for (let i=0; i<8; i++) {
      expect(testList.kthFromEnd(i)).toEqual(i);
    }
  })

  test('that the middle node value function will throw on invalid request', () => {
    let emptyList = new linkedList();
    expect(() => {
      emptyList.middleValue()
    }).toThrow();
  });

  test('that the middle node value function will correctly return the middle node value', () => {
    //results in 7->6->5->4->3->2->1->0
    expect(testList.middleValue()).toEqual(4);
    testList.delete(7);
    //6->5->4->3->2->1->0
    expect(testList.middleValue()).toEqual(3);
    let shortList = new linkedList();
    shortList.append(1);
    expect(shortList.middleValue()).toEqual(1);    
  })


})
