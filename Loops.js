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
  const newString = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelInString = []
  let consonantInString = []

  for (let i = 0; i < newString.length; i++) {
    if (s[i] in vowels) newString.pop(){

    }else {

    }

  }
  let i = 0;
  for (i; i < newString.length; i++) {
    console.log(newString[i]);
  }
}


function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
