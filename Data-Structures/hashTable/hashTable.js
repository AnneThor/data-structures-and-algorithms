'use strict'

const ll = require('../linkedList/linked-list.js');

/**
 * The hash table class contains the basic methods to
 * construct and add to/lookup from a hash table
 **/
class HashTable {

  /**
   * To construct a new hash table, you must provide the
   * initial length of the table; this will create a
   * new hashtable with an empty linked list stored at
   * each index
   * @param {number} size - length of storage array
   **/
    constructor(size) {
      this.size = size;
      this.map = new Array(size).fill(new ll());
      this.keys = [];
    }

  /**
   * The hash function accepts a string input and returns
   * a number between zero and the size of the array - 1
   * @param {string} key - key that you are inserting to table
   * @return {number} - the hash number that represents the index
   * the key/value pair will be inserted at
   **/
    hash(key) {
      let charArr = key.split('');
      let charVal = charArr.reduce((acc, char) => {
        return acc * char.charCodeAt(0);
      }, 1)
      return (charVal + 599) % this.size;
    }

  /**
   * The add function adds a key value pair to the hash
   * table at the end of the linked list stored at the
   * index that corresponds to the hash of the key
   * @param {string} key - key of the info you are inserting to hash table
   * @param {any} value - information of any type that you are adding at that key
   **/
    add(key, value) {
      if (this.contains(key)) {
        return "Value already in table"
      }
      if (!value) { value = key }
      let unit = { [key]: value }
      let hash = this.hash(key);
      this.map[hash].append(unit);
      this.keys.push(key);
    }

  /**
   * The get function accepts a key (string) input and retrieves the
   * key/value pair from the hash table at this key or null if there
   * is no data in the hash table at that key
   * @param {string} key - the key of the data being looked up
   * @return {object} - the key/value pair that you looked up, or null
   * if nothing was found at this key
   **/
    get(key) {
      let hash = this.hash(key);
      let list = this.map[hash];
      if (!list.head) { return null }
      let curr = list.head;
      while (curr) {
        if (curr.value.hasOwnProperty(key)) {
          return curr.value[key]
        }
        curr = curr.next;
      }
      return null;
    }

    /**
     * The update function checks if a value is present in a hash
     * table and, if it is, replaces it with the updated data
     * @param {string} key - key of value to update
     **/
     update(key, value) {
       let hash = this.hash(key)
       if (!this.contains(key)) {
         this.add(key);
       } else {
         // we need to update this value
         let list = this.map[hash];
         if (!list.head) { return null }
         let curr = list.head
         while (curr) {
           if (curr.value.hasOwnProperty(key)) {
             curr.value = { [key]: value }
           }
           curr = curr.next;
         }
       }
     }

    /**
     * The contains function accepts a key (string) input and
     * returns a Boolean representing whether the key was found
     * in the hash table
     * @param {string} key - the key being looked up in the hash table
     * @return {Boolean} - representing whether the key was found in the table
     **/
    contains(key) {
      let hash = this.hash(key);
      let list = this.map[hash];
      if (!list.head) {
        return false
      }
      let curr = list.head;
      while (curr) {
        if (curr.value.hasOwnProperty(key)) {
          return true;
        }
        curr = curr.next;
      }
      return false;
    }

}

module.exports = HashTable;
