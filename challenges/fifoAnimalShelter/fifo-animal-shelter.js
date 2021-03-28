// use FIFO
// enqueue(animal), adds to back of queue
// dequeue(pref) returns dog or a cat from the front of the queue

'use strict';

const Node = require('../../Data-Structures/linkedList/node.js');
const Animal = require('./Animal.js');
const Queue = require('../../Data-Structures/stacks-and-queues/queue.js');

class AnimalShelter extends Queue {

  /**
   * Instantiantes a new Queue object that is initially empty with an empty
   * front and rear node
   */
  constructor() {
    super();
  }

  /**
   * Checks the input and then creates a new node with the given input and
   * adds the node to the back of the queue; throws an error if given a bad
   * input (i.e. an object that isn't an animal w/type cat or dog)
   * @param {object} value - object to add to Animal Shelter
   */
   enqueue(value) {
     if (!this.checkAnimal(value)) {
       throw new Error('Invalid Input!');
     }
     let newNode = new Node(value);
     if (!this.front) {
       this.front = newNode;
       this.rear = newNode;
       this.front.next = this.rear;
       return;
     }
     this.rear.next = newNode;
     this.rear = newNode;
   }

   /**
   * Removes the node nearest the front of the queue that matches the animal
   * type indicated in the pref parameter
   * @param {string} - indicating preference of dog or cat
   * @returns {string} - the type of the nearest animal object to the front of the queue
   * matching the preference of animal type
   */
   dequeue(pref) {
     if (!this.front) {
       throw new Error('Cannot dequeue an empty queue');
     }
     if (!pref) {
       let tempNode = this.front;
       this.front = this.front.next;
       tempNode.next = null;
       return tempNode.value.type;
     }
     if (pref.toLowerCase() !== 'cat' && pref.toLowerCase() !== 'dog') {
       return null;
     }
     let curr = this.front;
     if (curr.value.type === pref) {
       this.front = curr.next;
       curr.next = null;
       return curr.value.type;
     }
     // iterate through the queue
     while(curr.next.next !== null) {
       if (curr.next.value.type === pref) {
         let tempNode = curr.next;
         curr.next = curr.next.next;
         tempNode.next = null;
         return tempNode.value.type;
       }
       curr = curr.next;
     }
     // check the last node, curr is the node in front of rear
     if (this.rear.value.type === pref) {
       let tempNode = this.rear;
       curr = this.rear;
       this.rear.next = null;
       return tempNode.value.type;
     }
     // if no animal matching preference return null
     return null;
     // if you're still in the function there was no animal matching pref
     // so return the front node
     // curr = this.front;
     // if (curr.next === null) {
     //   this.front = null;
     //   this.rear = null;
     //   return curr.value.type;
     // } else {
     //   this.front = curr.next;
     //   curr.next = null;
     //   return curr.value.type;
     // }
   }

  /**
  * Returns a string representation of the queue
  * @returns {string} - string representation of the queue (values)
  */
  toString() {
    if (this.front === null) {
      return "No animals in the shelter";
    }
    let arr = [];
    let curr = this.front;
    while (curr.next !== null) {
      arr.splice(0, 0, curr.value.type)
      curr = curr.next;
    }
    arr.splice(0,0,curr.value.type);
    console.log(arr.join(' -> '));
  }


  /**
   * Helper function accepting an object and checking if it is of the right
   * type to enter the AnimalShelter queue
   * @param {object} animal - input value to test if it is a dog or cat
   * @return {boolean} - whether or not the object is a dog or cat
   */
  checkAnimal(animal) {
    if (animal instanceof Animal) {
        if (animal.type === 'dog' || animal.type === 'cat') {
          return true;
        }
    } else {
      return false;
    }
  }

}

module.exports = AnimalShelter;
