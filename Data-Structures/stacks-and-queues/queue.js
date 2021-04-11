'use strict';

const Node = require('../linkedList/node.js');

class Queue {

  /**
   * Instantiantes a new Queue object that is initially empty with an empty front and rear node
   */
  constructor() {
    this.front = null;
    this.rear = null;
  }

  /**
   * Creates a new node with the given input and adds the node to the back of the queue
   * @param {*} value - input value of the new node added to queue
   */
   enqueue(value) {
     let newNode = new Node(value);
     if (!this.front) {
       this.front = newNode;
       this.rear = newNode;
       // this.front.next = this.rear;
       return;
     }
     this.rear.next = newNode;
     this.rear = newNode;
   }

  /**
  * Removes the front node from the queue and returns the value it is holding
  * If the queue is empty an error will be thrown
  * @returns {*} - the value held in the first node of the queue
  */
  dequeue() {
    if (!this.front) {
      throw new Error('Cannot dequeue an empty queue');
    }
    if (this.front.next === null) {
      let tempNode = this.front;
      this.front = null;
      this.rear = null;
      return tempNode.value;
    }
    let tempNode = this.front;
    this.front = this.front.next;
    tempNode.next = null;
    return tempNode.value;
  }

  /**
   * Returns the value held in the front node of the queue
   * Makes no changes to current node structure
   * Throws an error if called on an empty queue
   * @returns {*} - the value held in the first node
   */
   peek() {
     if (!this.front) {
       throw new Error('Cannot peek an empty queue');
     }
     return this.front.value;
   }

   /**
    * Returns a boolean representing if the queue is empty
    * @returns {boolean} - representing if queue is empty
    */
    isEmpty() {
      return this.front === null ? true : false;
    }

}

module.exports = Queue;
