'use strict';

const Animal = require('../../challenges/fifoAnimalShelter/Animal.js');
const AnimalShelter = require('../../challenges/fifoAnimalShelter/fifo-animal-shelter.js');

describe("ANIMAL SHELTER functionality", () => {

  let emptyShelter = new AnimalShelter();
  let fullShelter = new AnimalShelter();
  let dogShelter = new AnimalShelter();
  let catShelter = new AnimalShelter();
  let shelterArr = [emptyShelter, fullShelter, dogShelter, catShelter]

  // Filling up the shelters to run tests on
  beforeEach(() => {
    // NOTE: enqueue is a queue method that has been previously
    // tested, it's not a new method in this challenge
    for (let i=0; i<10; i++) {
      if (i%3 === 0) {
        fullShelter.enqueue(new Animal('cat'));
      } else {
        fullShelter.enqueue(new Animal('dog'));
      }
    }
    // FULL SHELTER: cat dog dog cat dog dog cat dog dog cat
    for (let i=0; i<6; i++) {
      dogShelter.enqueue(new Animal('dog'));
      if (i<3) {
        catShelter.enqueue(new Animal('cat'));
      }
    }
    // DOG SHELTER: 6 dogs
    // CAT SHELTER: 3 cats
  })

  // empty all the shelters to avoid side effects
  afterEach(() => {
    shelterArr.forEach(shelter => {
      shelter.front = null;
      shelter.rear = null;
    })
  })

  test('that we can only enqueue cats or dogs to the animal shelter', () => {
    let monkey = new Animal('monkey');
    expect(() => {
      emptyShelter.enqueue(monkey)
    }).toThrow();
    expect(() => {
      fullShelter.enqueue(monkey)
    }).toThrow();
  })

  test('that dequeue from an empty shelter throws', () => {
    expect(() => {
      emptyShelter.dequeue();
    }).toThrow();
  })

  test('that dequeue with no preference returns front of list', () => {
    expect(fullShelter.dequeue()).toEqual('cat');
    expect(fullShelter.dequeue()).toEqual('dog');
    expect(fullShelter.dequeue()).toEqual('dog');
  })

  test('that we can empty a shelter with dequeue', () => {
    // cat shelter has 3 cats
    for (let i=0; i <3; i++) {
      expect(catShelter.dequeue('cat')).toEqual('cat');
      catShelter.toString();
    }
    expect(() => {
      catShelter.dequeue('cat')
    }).toThrow();
    expect(() => {
      catShelter.dequeue()
    }).toThrow();
  })

  test('that dequeue with a preference returns first animal matching pref', () => {
    expect(fullShelter.dequeue('dog')).toEqual('dog');
    expect(fullShelter.front.value.type).toEqual('cat');
    expect(fullShelter.front.next.value.type).toEqual('dog');
    expect(fullShelter.front.next.next.value.type).toEqual('cat');
  })

  test('that dequeue with a pref on a full shelter with no match returns null', () => {
    expect(dogShelter.dequeue('cat')).toEqual(null);
    expect(catShelter.dequeue('dog')).toEqual(null);
  })


})
