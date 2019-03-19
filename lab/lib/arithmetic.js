'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a, b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a+b;
};

arithmetic.subtract = function (a, b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a-b;
};

arithmetic.multiply = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return (a * b);
};

arithmetic.divide = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return (a / b);
};