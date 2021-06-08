'use strict';

const ht = require('../../Data-Structures/hashTable/hashTable.js');

/**
 * Left join accepts two hash tables as arguments
 * and returns a left join (i.e. all values in the
 * left table are returned with the values from
 * the right table appended to the result row if they
 * exist)
 * @param {object} left - a hashtable that has strings as keys
 * and a synonym of the keys for values, so key -> value -->
 * string: string
 * @param {object} right - a hashtable that has strings for keys and
 * antonyms for values, so key:value -> string: string
 * @return {object} - an object that contains objects with
 * they key values from the left join and the synonym (and
 * antonym if applicable else null)
 * i.e. { {key: string, syn: sting, ant: string}, { key: string...}}
 **/
function leftJoin(left, right) {
  let keys = left.keys;
  let lj = keys.map(key => {
    let valArr = [key];
    valArr.push(left.get(key));
    valArr.push(right.contains(key) ? right.get(key) : null)
    return valArr;
  })
  return lj;
}

module.exports = { leftJoin: leftJoin }
