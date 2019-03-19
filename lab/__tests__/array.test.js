'use strict';

const sumArr = require('../lib/array.js');
const multiplyArr = require('../lib/array.js');

describe('sumArr function', () => {
  test('should return 0 if the array is empty', () => {
    let arr = [];
    let result = sumArr(arr);
    let expected = 0;
    expect(result).toBe(expected);
    console.log(`RESULT: ${result}`);
  });
  
  it('should return a sum of all numbers in array is they are all positive', () => {
    // const sumArr = (arr) => {
    //   console.log('sumArr Reached');
    //   if (arr.length === 0) {
    //     return 0;
    //   }
    //   let sumOfElements = 0;
    //   for (let i = 0; i <= arr.length - 1; i++){
    //     sumOfElements = sumOfElements + arr[i];
    //     console.log(sumOfElements);
    //   }
    //   return sumOfElements;
    // };
    let arr = [1, 2, 4, 3];
    let result = sumArr(arr);
    let expected = 10;
    expect(result).toBe(expected);
    console.log(`RESULT: ${result}`);
  });
  
//   it('should return with the sum of all elements even if there are negative numbers in the array', () => {
//     let arr = [1, -2, 4, -5];
//     let result = sumArr(arr);
//     let expected = -2;
//     expect(result).toBe(expected);
//     console.log(`RESULT: ${result}`);
//   });
// });


// describe('multiplyArr function', () => {
//   //needs fixing
//   test('should return undefined if the array is empty', () => {
//     let arr = [];
//     let result = multiplyArr(arr);//ends up returning Infinity instead of undefined
//     let expected = undefined;
//     expect(result).toBe(expected);
//   });
  
});