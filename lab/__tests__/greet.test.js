'use strict';

const greet = require('../lib/greet.js');

describe('greet.js function', () => {
  test('should return null when input is not a string', () => {
    let name = 1;
    let result = greet(name);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return null when input is undefined', () => {
    let name = undefined;
    let result = greet(name);
    let expected = null;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });

  it('should return with the hello + name  if the input is a string', () => {
    let name = 'World';
    let result = greet(name);
    let expected = `Hello, ${name}`;
    expect(result).toBe(expected);
    console.log('RESULT: ', result);
  });
});