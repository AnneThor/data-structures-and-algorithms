'use strict';

class Animal {

  /**
   * Class that makes a new Animal Object, extending Queue class
   * @param {string} type - type of animal to create
   */

  constructor(type) {
    this.type = type.toLowerCase();
  }
}

module.exports = Animal;
