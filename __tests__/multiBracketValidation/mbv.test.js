'use strict';

const mbv = require('../../challenges/multiBracketValidation/multi-bracket-validation.js');

describe("MULTI BRACKET VALIDATION functionality", () => {

  const trueArr  = ['{}', '{}(){}', '()[[Extra Characters]]', '(){}[[]]', '{}{Code}[Fellows](())'];
  const falseArr = ['[({}]', '(](', '{(})'];
  const noBracket = '123456';

  test("that strings with no brackets return false", () => {
    expect(mbv(noBracket)).toBeFalsy();
  });

  test("that unbalanced brackets return false", () => {
    falseArr.forEach(str => {
      expect(mbv(str)).toBeFalsy();
    })
  });

  test("that balanced brackets return true", () => {
    trueArr.forEach(str => {
      expect(mbv(str)).toBeTruthy();
    })
  });

});
