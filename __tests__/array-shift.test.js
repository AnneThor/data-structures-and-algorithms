'use strict'

const supertest = require('supertest');
const arrayShift = require('../challenges/arrayShift/array-shift.js');

describe('array shift', () => {

  it('adds a number to the middle index of an array with odd length input array', () => {
    expect(arrayShift([1,2,3,4], 99)).toEqual([1,2,99,3,4]);
  })

  it('adds a number to the middle index of an array with even length input array', () => {
    expect(arrayShift([1,2,3,4,5], 99)).toEqual([1,2,3,99,4,5]);
  })

  it('returns an empty array if given an empty array', () => {
    expect(arrayShift([], 99)).toEqual(([]))
  })

  it('returns an array with two values if given an array of length 1', ()=> {
    expect(arrayShift([1],100)).toEqual([1,100])
  })


})
