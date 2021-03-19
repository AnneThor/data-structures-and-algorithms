'use strict';

const Queue = require('../../Data-Structures/stacks-and-queues/queue.js');
const Node = require('../../Data-Structures/linkedList/node.js');

describe("QUEUE data structure functionality", () => {

  let emptyQ = new Queue();
  let testQ = new Queue();

  beforeEach(() => {
    let newNode = new Node(1);
    let newNodeTwo = new Node(2);
    newNode.next = newNodeTwo;
    // nn2(2) <-- nn(1)
    testQ.front = newNode;
    testQ.rear = newNodeTwo;
  });

  afterEach(() => {
    emptyQ.front = null;
    emptyQ.rear = null;
    testQ.front = null;
    testQ.rear = null;
  });

  test('that we can successfully add to an empty queue', () => {
    emptyQ.enqueue(5);
    expect(emptyQ.front).toBeTruthy();
    expect(emptyQ.front.value).toEqual(5);
    expect(emptyQ.rear).toBeTruthy();
    expect(emptyQ.rear.value).toEqual(5);
  });

  test('that enqueue works properly in a populated queue', () => {
    testQ.enqueue(3);
    expect(testQ.front).toBeTruthy();
    expect(testQ.front.value).toEqual(1);
    expect(testQ.front.next).toBeTruthy();
    expect(testQ.front.next.value).toEqual(2);
    expect(testQ.rear).toBeTruthy();
    expect(testQ.rear.value).toEqual(3);
  });

  test('that multiple enqueue calls will work properly', () => {
    testQ.enqueue(3);
    testQ.enqueue(4);
    testQ.enqueue(5);
    expect(testQ.front.value).toEqual(1);
    expect(testQ.rear.value).toEqual(5);
    expect(testQ.front.next.next.next.value).toEqual(4);
  })

  test('that we can successfully dequeue the expected value', () => {
    expect(testQ.dequeue()).toEqual(1);
    expect(testQ.dequeue()).toEqual(2);
    expect(() => {
        testQ.dequeue()
      }).toThrow();
  });

  test('that we can successfully peek into a queue and get the desired result', () => {
    expect(testQ.peek()).toEqual(1);
    testQ.dequeue();
    expect(testQ.peek()).toEqual(2);
    expect(() => {
      emptyQ.peek()
      }).toThrow();
  })

  test('that we can successfully empty a queue with repeated calls to dequeue', () => {
    testQ.dequeue();
    testQ.dequeue();
    expect(() => {
      testQ.dequeue()
      }).toThrow();
    expect(testQ.front).toBe(null);
    expect(testQ.rear).toBe(null);
  })

  test('that we can successfuly instantiate an empty queue', () => {
    expect(emptyQ).toBeTruthy();
    expect(emptyQ.front).toBe(null);
    expect(emptyQ.rear).toBe(null);
  })

  test('that calling peek or dequeue on an empty queue throw an error', () => {
    expect(() => {
      emptyQ.peek()
    }).toThrow();
    expect(() => {
      emptyQ.dequeue()
    }).toThrow();
  })

});
