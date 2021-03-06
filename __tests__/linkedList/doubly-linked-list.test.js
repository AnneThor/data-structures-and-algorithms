'use strict';

const doublyLinkedList = require('../../Data-Structures/doublyLinkedList/doubly-linked-list.js');

describe("DOUBLY LINKED LIST functionality", () => {

  let testList = new doublyLinkedList();
  let inputs = [1, 'cat', false];

  beforeEach(() => {
    testList.head = null;
    testList.tail = null;
  })

  afterEach(() => {
    testList.head = null;
    testList.tail = null;
  })

  it('can successfully instantiate an empty list', () => {
    expect(testList).toBeTruthy();
    expect(testList.head).toEqual(null);
    expect(testList.tail).toEqual(null);
  })

  it('can properly insert into the linked list', () => {
    testList.insert(5);
    expect(testList.head.value).toEqual(5);
    expect(testList.tail.prev).toEqual(null);
    expect(testList.head.next).toEqual(null);
  })

  it('will have a head property properly pointing to the first node in the list with no previous reference', () => {
    inputs.forEach(item => {
      testList.insert(item);
    });
    expect(testList.head.value).toEqual(false);
    expect(testList.head.prev).toEqual(null);
  })

  it('will have a tail properly pointing to the last node in the sequence with no next reference', () => {
    inputs.forEach(item => {
      testList.insert(item);
    });
    expect(testList.tail.value).toEqual(1);
    expect(testList.tail.prev.value).toEqual('cat');
    expect(testList.tail.next).toBe(null);
  });

  it('will be possible to create the list from the append method alone', () => {
    //inputs is   let inputs = [1, 'cat', false];
    //so we expect 1, cat, false
    inputs.forEach(item => {
      testList.append(item);
    });
    expect(testList.head.value).toEqual(1);
    expect(testList.tail.value).toEqual(false);
    expect(testList.head.prev).toEqual(null)
    expect(testList.tail.next).toEqual(null);
    expect(testList.head.next.value).toEqual('cat');
    expect(testList.tail.prev.value).toEqual('cat');
  })

  it('can properly insert multiple nodes into the linked list', () => {
    inputs.forEach(item => {
      testList.insert(item);
    });
    expect(testList.head.value).toEqual(false);
    expect(testList.head.next.value).toEqual('cat');
    expect(testList.head.next.next.value).toEqual(1);
    expect(testList.head.next.next.next).toBe(null);
    expect(testList.tail.next).toBe(null);
    expect(testList.tail.prev.value).toBe('cat');
  })

  it('will return true when finding a value that the linked list contains', () => {
    inputs.forEach(item => {
      testList.insert(item);
    })
    expect(testList.includes(inputs[1])).toBeTruthy();
  })

  it('will return false when searching for a value not in the list', () => {
    inputs.forEach(item => {
      testList.insert(item);
    })
    expect(testList.includes('notIncludedString')).toBe(false);
  })

  it('can properly return a string representation of all values in the list', () => {
    inputs.forEach(item => {
      testList.insert(item);
    })
    expect(testList.toString()).toEqual(`\{ ${inputs[2]} \} \-\> \{ ${inputs[1]} \} \-\> \{ ${inputs[0]} \} \-\> NULL`);
    expect(new doublyLinkedList().toString()).toEqual("NULL");
  })

})
