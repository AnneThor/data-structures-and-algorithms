'use strict';

const linkedList = require('../../Data-Structures/linkedList/linked-list.js');

describe("LINKED LIST functionality", () => {

  let testList = new linkedList();
  let inputs = [1, 'cat', false];

  beforeEach(() => {
    testList.head = null;
  })

  afterEach(() => {
    testList.head = null;
  })

  it('can successfully instantiate an empty list', () => {
    expect(testList).toBeTruthy();
    expect(testList.head).toEqual(null);
  })

  it('can properly insert into the linked list', () => {
    testList.insert(5);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next).toEqual(null);
  })

  it('will have a head property properly pointing to the first node in the list', () => {
    inputs.forEach(item => {
      testList.insert(item);
    })
    expect(testList.head.value).toEqual(false);
  })

  it('can properly insert multiple nodes into the linked list', () => {
    inputs.forEach(item => {
      testList.insert(item);
    })
    expect(testList.head.value).toEqual(false);
    expect(testList.head.next.value).toEqual('cat');
    expect(testList.head.next.next.value).toEqual(1);
    expect(testList.head.next.next.next).toBe(null);
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
    expect(new linkedList().toString()).toEqual("NULL");
  })

})
