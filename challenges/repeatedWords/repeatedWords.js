'use strict';

const ht = require('../../Data-Structures/hashTable/hashTable.js')

/**
 * Repeated words accepts a string and returns
 * the first word that is repeated in the string
 * @param {string} string - the text that we are
 * analyzing
 * @return {string} - "No doubles" if no words
 * were repeated or the string representation
 * of the first word found twice
 **/
function repeatedWords(string) {
  const map = new ht(1240);
  const wordArray = stringToArray(string);
  if (wordArray.length === 0) { return null }
  let counter = 0;
  while(counter < wordArray.length) {
    if (map.contains(wordArray[counter])) {
      return map.get(wordArray[counter])
    }
    map.add(wordArray[counter].toLowerCase());
    counter++
  }
  return "No doubles";
}

/**
 * Word Count takes a string input and returns
 * an object that holds key/value pairs that
 * represent each unique word and the integer
 * count of the number of times it appeared in
 * the text
 * @param {string} string - the string we are
 * analyzing
 * @return {object} - object holding unique
 * words as keys with an integer representing
 * the number of occurrences
 **/
function wordCount(string) {
  // make a hashmap
  // add everything and if encounter smth
  // in the map increment the count field
  let map = new ht(1240);
  let words = [];
  const wordArray = stringToArray(string);
  wordArray.forEach(word => {
    if (map.contains(word)) {
      let curr = map.get(word);
      map.update(word, curr + 1)
    } else {
      map.add(word, 1);
      words.push(word);
    }
  })
  let totals = {}
  words.forEach(word => {
    totals[word] = map.get(word);
  })
  return totals;
}

/**
 * stringToArray is a helper function that
 * accepts a strings as input and returns
 * an array of the words in the string stripped
 * of punctuation
 * @param {string} string - the string we are
 * analyzing
 * @return {object} - an array containing just
 * the lowercase words of the text with any
 * whitespace/punctuation/non alphabetical
 * characters removed
 **/
function stringToArray(string) {
  let wordArray = string.split(" ");
  const regex = /[A-Za-z]*/g;
  wordArray = wordArray.map(word =>
    word = word.match(regex)[0]
  )
  return wordArray;
}

module.exports = { repeatedWords: repeatedWords,
  wordCount: wordCount };
