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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelArr = [];
  let consonantArr = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      vowelArr.push(s[i]);
    }
    else {
      consonantArr.push(s[i]);
    }
  }

  for (let i = 0; i < vowelArr.length; i++) {
    console.log(vowelArr[i]);
  }

  for (let i = 0; i < consonantArr.length; i++) {
    console.log(consonantArr[i]);
  }
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
