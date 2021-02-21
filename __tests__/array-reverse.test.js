'use strict'

const supertest = require('supertest');
const arrayReverse = require('../challenges/arrayReverse/array-reverse.js');

describe('array reverse', () => {

  it('reverses an array input', () => {
    expect(arrayReverse([1,2,3,4,5])).toEqual([5,4,3,2,1]);
  })


})
