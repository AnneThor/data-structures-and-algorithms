'use strict';

const { repeatedWords, wordCount } = require('../../challenges/repeatedWords/repeatedWords.js')

describe("REPEATED WORDS functionality", () => {

  let a, it, summer;

  beforeEach(() => {
    a = "Once upon a time, there was a brave princess who..."
    it = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
    summer = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
  })

  afterEach(() => {
    a = null; it = null; summer = null;
  })

  test("that the repeatedWords function returns the first word that appears twice", () => {
    expect(repeatedWords(a)).toEqual("a");
    expect(repeatedWords(it)).toEqual("it");
    expect(repeatedWords(summer)).toEqual("summer");
  })

  test("that the word count function returns a count of words", () => {
    expect(wordCount(a)["a"]).toEqual(2)
    expect(wordCount("hi hi hi bye bye bye")["hi"]).toEqual(3)
    expect(wordCount("hi hi hi bye bye bye")["bye"]).toEqual(3)
  })

})
