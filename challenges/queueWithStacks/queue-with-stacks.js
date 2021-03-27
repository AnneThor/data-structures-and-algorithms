'use strict';

// make a standard queue interface
// but make it from 2 Stack object
// from stack use pop, pop, peek

const Stack = require('../../Data-Structures/stacks-and-queues/stack.js');
// can only use push, pop and peek on stacks

class PseudoQueue {

  /**
   * @constructor
   * instantiates a new instance of PseudoQueue class with an empty front node and a
   * queue attribute that stores the queue
   */
  constructor() {
    this.queue = new Stack();
    this.spareQueue = new Stack();
    this.front = null;
  }

  /**
   * Accepts an input value, creates a new Node object holding this value and adds this
   * new node to the back of the queue (it will be the last node to be removed)
   * @param {*} value - the value to hold inside the new Node
   */
  enqueue(value) {
    // if the current Queue is empty, just pop it on the stack
    if (this.queue.top === null) {
      this.queue.push(value);
      this.front = this.queue.top;
      return this.queue;
    }
    // otherwise it has values, transfer them to the spareQueue
    while (this.queue.top !== null) {
      this.spareQueue.push(this.queue.pop());
    }
    // now make the top Node
    this.queue.push(value);
    // now pop everything off the spare stack back on the queue stack
    while (this.spareQueue.top !== null) {
      this.queue.push(this.spareQueue.pop());
    }
    return this.queue;
  }

  /**
   * Removes the top node from a stack and returns the new, shortened queue;
   * or throws an error if the stack is empty; resets front node to the new
   * "front" node
   * @returns {*} - contents/value of the top node
   */
  dequeue() {
    // this is the same as removing the top of the stack
    this.queue.pop();
    this.front = this.queue.top;
    return this.queue;
  }

}

module.exports = PseudoQueue;
