'use strict';

// let arr = [1, 12, 4, -5, 3];
const sumArr = (arr) => {
  console.log('sumArr Reached');
  if (arr.length === 0) {
    return 0;
  }
  let sumOfElements = 0;
  for (let i = 0; i <= arr.length - 1; i++){
    sumOfElements = sumOfElements + arr[i];
    console.log(sumOfElements);
  }
  return sumOfElements;
};

const multiplyArr = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i <= arr.length - 1; i++){
    result = result * arr[i];
    // console.log(result);
  }
  return result;
};

module.exports = (sumArr, multiplyArr);