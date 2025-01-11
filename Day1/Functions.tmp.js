import readline from 'readline'

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(n) {
  // base case
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function main() {
  r1.question('Enter a number: ', (n) => {
    console.log(`The factorial of ${n} is ${factorial(parseInt(n))}`)
    r1.close();
  });
}

main();
