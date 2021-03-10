'use strict';

const linkedList = require('../../Data-Structures/linkedList/linked-list.js');

describe("LINKED LIST extended functionality", () => {

  let testList = new linkedList();
  let inputs = [1, 'cat', false];
  let newValue = 'addedValue';
  let newValueTwo = 'secondNewValue';

  beforeEach(() => {
    testList.head = null;
    inputs.forEach(item => {
      testList.insert(item);
      //results in false -> 'cat' -> 1
    })
  })

  afterEach(() => {
    testList.head = null;
  })

  test('that the append method creates a new node and adds it to the end of the list', () => {
    testList.append(newValue);
    expect(testList.head.next.next.next.value).toEqual(newValue);
    expect(testList.head.next.next.next.next).toEqual(null);
    testList.append(newValueTwo);
    expect(testList.head.next.next.next.next.value).toEqual(newValueTwo);
    expect(testList.head.next.next.next.next.next).toEqual(null);
  })

  test('that the insertBefore can successfully add a new node to the head of a linked list', () => {
    testList.insertBefore(false, newValue);
    expect(testList.head.value).toEqual(newValue);
    expect(testList.head.next.value).toEqual(false);
  })

  test('that the insertBefore method correctly adds a node before the node with the given value or returns -1 if the value is not found', () => {
    expect(testList.insertBefore(5, newValue)).toEqual(-1);
    testList.insertBefore('cat', newValue);
    expect(testList.head.next.value).toEqual(newValue);
    expect(testList.head.next.next.value).toEqual('cat');
  })

  test('that the insertAfter method correctly adds a new node after the node with the given value or returns -1 if the value is not found', () => {
    expect(testList.insertAfter(5, newValue)).toEqual(-1);
    testList.insertAfter('cat', newValue);
    expect(testList.head.next.next.value).toEqual(newValue);
    expect(testList.head.next.next.next.value).toEqual(1);
    expect(testList.head.next.next.next.next).toEqual(null);

  })

  test('that the insertAfter method can successfully add a node after the last node in an existing linked list', () => {
    testList.insertAfter(1, newValue);
    expect(testList.head.next.next.value).toEqual(1);
    expect(testList.head.next.next.next.value).toEqual(newValue);
    expect(testList.head.next.next.next.next).toEqual(null);
  })

  test('that the delete method can delete the head node without deleting the list', () => {
    testList.delete(false);
    expect(testList.head.value).toEqual('cat');
    expect(testList.head.next.next).toEqual(null);
  })

  test('that the delete method can delete the last node of the list, and the remaining last node will point to null', () => {
    testList.delete(1);
    expect(testList.head.
      next.next).toEqual(null);
    expect(testList.head.next.value).toEqual('cat');
  })

  test('that the delete method can successfully delete from the middle of the list', () => {
    testList.delete('cat');
    expect(testList.head.value).toEqual(false);
    expect(testList.head.next.value).toEqual(1);
    expect(testList.head.next.next).toEqual(null);
  })

  test('that delete method will return -1 if the value is not found', () => {
    expect(testList.delete('dog')).toEqual(-1);
  })

  test('try out delete on a longer list', () => {
    let longListIn = [1,2,3,4,5,6,7,8,9,10];
    let longList = new linkedList();
    longListIn.forEach(number => {
      longList.append(number);
    })
    longList.delete(6);
    let current = longList.head;
    while(current.next !== null) {
      expect(current.value).not.toEqual(6);
      current = current.next;
    }
  })

})
