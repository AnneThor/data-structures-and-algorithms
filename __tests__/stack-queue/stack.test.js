'use strict';

const Stack = require('../../Data-Structures/stacks-and-queues/stack.js');
const Node = require('../../Data-Structures/linkedList/node.js');

describe("STACK data structure functionality", () => {

  let emptyStack = new Stack();
  let testStack = new Stack();
  let nodeZero = new Node(0);
  let nodeOne = new Node(1);
  let nodeTwo = new Node(2);

  beforeEach(() => {
    nodeTwo.next = nodeOne;
    nodeOne.next = nodeZero;
    testStack.top = nodeTwo;
    // testStack: 0 <- 1 <- 2
  });

  afterEach(() => {
    emptyStack.top = null;
    testStack.top = null;
  })

  test('successful push adds to top of a stack', () => {
    emptyStack.push(3);
    expect(emptyStack.top).toBeTruthy();
    expect(emptyStack.top.value).toEqual(3);
    testStack.push(3);
    expect(testStack.top.value).toEqual(3);
  });

  test('multiple calls product expected stack', () => {
    // we will try to build 4 <- 3 <- 2 <- 1
    emptyStack.push(4);
    emptyStack.push(3);
    emptyStack.push(2);
    emptyStack.push(1);
    expect(emptyStack.top).toBeTruthy();
    expect(emptyStack.top.value).toEqual(1);
    expect(emptyStack.top.next.value).toEqual(2);
    expect(emptyStack.top.next.next.value).toEqual(3);
    expect(emptyStack.top.next.next.next.value).toEqual(4);
    expect(emptyStack.top.next.next.next.next).toBe(null);
  });

  test('popping off the stack is functional', () => {
    expect(() => {
      emptyStack.pop()
    }).toThrow();
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);
  });

  test('that we can empty a stack using pop', () => {
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);
    expect(testStack.pop()).toEqual(0);
    expect(testStack.peek()).toBeNull()
    expect(testStack.top).toBe(null);
  })

  test('that we can successfully peek the top item of a stack', () => {
    expect(emptyStack.peek()).toBeNull()
    expect(testStack.peek()).toEqual(2);
    testStack.pop();
    expect(testStack.peek()).toEqual(1);
  })

  test('that we can successfully instantiate an empty stack', () => {
    expect(emptyStack).toBeTruthy();
    expect(emptyStack.top).toBe(null);
  })

});
