'use strict';

let greet = {};

greet = (name) => {
  let input = name;
  if(typeof input !== 'string') {
    return null;
  }
  return(`Hello, ${input}`);
};
console.log('Pants');
module.exports = (greet);
