'use strict';

const Stack = require('../../Data-Structures/stacks-and-queues/stack.js');
const PseudoQueue = require('../../challenges/queueWithStacks/queue-with-stacks.js');
const Node = require('../../Data-Structures/linkedList/node.js');

describe("PSEUDOQUEUE functionality", () => {

  let emptyPQ = new PseudoQueue();
  let fullPQ = new PseudoQueue();

  beforeEach(() => {
    let newNode = new Node(5);
    fullPQ.queue.top = newNode;
    fullPQ.front = newNode;
    for (let i=4; i>0; i--) {
      fullPQ.queue.push(i);
    }
    // expect 5 -> 4 -> 3 -> 2 -> 1
  })

  //clearing out empty queue after tests
  afterEach(() => {
    emptyPQ.queue.top = null;
    emptyPQ.spareQueue.top = null;
    emptyPQ.front = null;
    fullPQ.queue.top = null;
    fullPQ.spareQueue.top = null;
    fullPQ.front = null;
  })

  test('that ENQUEUE, adding to front of empty queue properly works', () => {
    emptyPQ.enqueue(5);
    expect(emptyPQ.front).toBeTruthy();
    expect(emptyPQ.front.value).toEqual(5);
  })

  test('that ENQUEUE works on a non empty queue', () => {
    fullPQ.enqueue(0);
    expect(fullPQ.front).toBeTruthy();
    let expected = 5;
    let testNode = fullPQ.front;
    while (testNode.next !== null) {
      expect(testNode.value).toEqual(expected);
      testNode = testNode.next;
      expected--;
    }
  })

  test('that DEQUEUE throws an exception on an empty pseudoqueue', () => {
    expect(() => {
      emptyPQ.dequeue()
    }).toThrow();
  });

  test('that we can remove everything to make it empty and then throw error', () => {
    for (let i=0; i<5; i++) {
      fullPQ.dequeue();
    }
    //list should be empty now
    expect(() => {
      emptyPQ.dequeue()
    }).toThrow();
  });

  test('that removing just one returns the shortened list we expect', () => {
    fullPQ.dequeue();
    expect(fullPQ.front.value).toEqual(2);
    fullPQ.dequeue();
    expect(fullPQ.front.value).toEqual(3);
  })

})
