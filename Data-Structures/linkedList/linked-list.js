'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  /**
  * Takes in any values as an argument and adds a new node as the tail
  * @param {*} value - any value is acceptable as input
  */
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.length++;
    } else {
      let current = this.head;
      //traverse to the last node
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.length++;
    }
  }

  /**
  * Takes in any value returns the node holding the input value
  * @param {*} value - takes in any type of value to search for and delete
  * @returns {Number} - -1 if value is not found in the list
  */
  delete(value) {
    if(this.head === null) {
      return -1;
    }
    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      current.next = null;
      this.length--;
    } else if (current.next === null) {
      return -1
    } else {
      while (current.next.next !== null && current.next.value !== value) {
        current = current.next;
      }
      //now either current.next.next === null & you need to test curr.next
      //or current.next.value = value to remove
      if (current.next.next === null) {
        if (current.next.value === value) {
          current.next = null;
          this.length--;
        } else {
          return -1;
        }
      } else {
        //current.next.value = value
        current.next = current.next.next;
        this.length--;
      }
    }
  }


  /**
  * Takes in any value and returns a Boolean representing if the linked list
  * includes the value
  * @param {*} value - takes in any type of value to search for
  * @returns {Boolean} - representing if the value was found in the linked list
  */
  includes(value) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
  * Takes in any value as an argument and adds a new node as the head
  * @param {*} value - accepts any value to store in the node
  */
  insert(value) {
    let current = this.head;
    this.head = new Node(value);
    this.head.next = current;
    this.length++;
  }

  /**
  * Accepts a value to search for and a newValue to add
  * Creates a node with the new value and inserts it into the list after the
  * node containing the search value (if found)
  * If the search value is not contained in the linked list, returns -1
  * @param {*} value - value to search for in the array (any type)
  * @param {*} newValue - value to add to new node
  * @returns {Number} - -1 if the search value is not found in the array
  */
  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== value) {
      current = current.next;
    }
    if (current.next === null && current.value !== value) {
      return -1;
    } else if (current.next === null && current.value === value) {
      return this.append(newValue);
    } else {
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  /**
  * Accepts a value to search for and a newValue to add
  * Creates a node with the new value and inserts it into the list before the
  * node containing the search value (if found)
  * If the search value is not contained in the linked list, returns -1
  * @param {*} value - value to search for in the array (any type)
  * @param {*} newValue - value to add to new node
  * @returns {Number} - -1 if the search value is not found in the array
  */
  insertBefore(value, newValue) {
    if(this.head.value === value) {
      return this.insert(newValue);
    }
    let current = this.head;
    while (current.next.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next.next === null & current.next !== value) {
      return -1;
    } else {
      //current.next = value
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  /**
  * Takes an integer input k and returns the value of the node in the kth position
  * from the end of the linked list
  * @param {Number} k - integer representing the nth place from end to return the value of
  * @returns {*} - the contents of the node at the kth position from the end or `Exception` if not found
  */
  kthFromEnd(k) {
    if (k >= this.length || k < 0) {
      throw "Exception, input out of bound";
    }
    if (this.length === 1) {
      if (k > 0) {
        throw "Exception, input out of bound";
      } else {
        return this.head.value;
      }
    }
    let endpoint = this.length - k;
    let current = this.head;
    for (let i=1; i<endpoint; i++) {
      current = current.next;
    }
    return current.value;
  }

  /**
  * Returns the value of the middle node in a linked list
  * For odd numbered lists this will be at the length/2 numbered node
  * @returns {*} - the contents of the node at the middle position
  */
  middleValue(){
    if (this.head === null) {
      throw "Exception, empty head";
    }
    let middle = Math.ceil(this.length/2);
    let current = this.head;
    for (let i=1; i<middle; i++) {
      current = current.next;
    }
    return current.value;
  }

  /**
   * Reverses a linked list and returns a reference to the new list head
   * list updated in reverse order
   */
   reverse() {
     // try a recursive call 
   };


  /**
  * Returns all the values in the linked list as a string represented in the format
  * "{ a } -> { b } -> { c } -> NULL"
  * @returns {String} - string representing the data held in each node in the format
  * "{ a } -> { b } -> { c } -> NULL"
  */
  toString() {
    if (!this.head) {
      return "NULL";
    }
    let current = this.head;
    let returnString ='';
    while (current.next) {
      let curStr = typeof current.value === "string" ? current.value: current.value.toString();
      returnString += `\{ ${curStr} \} \-\> `
      current = current.next;
    }
    let curStr =  typeof current.value === "string" ? current.value: current.value.toString();
    return returnString + `\{ ${curStr} \} \-\> NULL`;
  }

}



module.exports = LinkedList;
