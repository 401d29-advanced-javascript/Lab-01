'use strict';

let greet = {};

greet = (name) => {
  let input = name;
  if(typeof input !== 'string') {
    return null;
  }
  return(`Hello, ${input}`);
};

module.exports = (greet);
