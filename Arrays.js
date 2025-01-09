'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // convert the nums array to set, then convert it back to array using the spread operator
  // sort the array, then return the second to the last element, which is in the index array.length - 2, given that array.length > 1
  const tmpNum = new Set(nums);
  const sortedNums = [...tmpNum];

  sortedNums.sort((a, b) => (a - b));

  return sortedNums[sortedNums.length - 2];
}


function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);

  console.log(getSecondLargest(nums));
}
