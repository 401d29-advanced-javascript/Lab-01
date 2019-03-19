'use strict';

const arithmetic = require('../lib/arithmetic.js');

//addition tests
describe('arithmetic.js  addition function', () => {
  it('should return null if a or b is not a  number', () => {
    let a = NaN;
    let b = 1;
    let result = arithmetic.add(a,b);
    let expected = NaN;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  //write test for negative numbers
  it('should return with the sum of all numbers when negative numbers are included', () => {
    let a = -1;
    let b = -3;
    let result = arithmetic.add(a, b);
    let expected = -4;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return null if a or b is undefined', () => {
    let a = undefined;
    let b = 1;
    let result = arithmetic.add(a,b);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return null if either a or b is a string value', () => {
    let a = 1;
    let b = 'foo';
    let result = arithmetic.add(a,b);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return the sum if a and b are both numbers', () => {
    let a = 12;
    let b = 8;
    let result = arithmetic.add(a, b);
    let expected = a + b;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });
});

// //subtract tests
describe('arithmetic.js subtract function', () => {
  it('should return null if a or b is not a  number', () => {
    let a = NaN;
    let b = 1;
    let result = arithmetic.subtract(a,b);
    let expected = NaN;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  //test for negative numbers
  it('should return null if a or b is a string value', () => {
    let a = 1;
    let b = 'foo';
    let result = arithmetic.subtract(a,b);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return the sub if a and b are both numbers', () => {
    let a = 12;
    let b = 8;
    let result = arithmetic.subtract(a, b);
    let expected = (a - b);
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });
});

//multiplication tests
describe('arithmetic.js multiplication function', () => {
  it('should return null if a or b is not a number', () => {
    let a = 'foo';
    let b = 12;
    let result = arithmetic.multiply(a, b);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return the result of multiplication if both inputs are numbers', () => {
    let a = -9;
    let b = 12;
    let result = arithmetic.multiply(a, b);
    let expected = (a * b);
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });
});

//division tests
describe('arithmetic.js division function', () => {
  it('should return null if a or b is not a number', () => {
    let a = 'foo';
    let b = 12;
    let result = arithmetic.multiply(a, b);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return the result of multiplication if both inputs are numbers', () => {
    let a = 100;
    let b = 20;
    let result = arithmetic.multiply(a, b);
    let expected = (a * b);
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });
});