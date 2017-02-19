const fibonacci = require('./lib/fibonacci');

const arg = process.argv[2] || '';

if (arg.match(/^[1-9]+[0-9]*$/)) {
  const n = parseInt(arg);
  const result = fibonacci(n);
  console.log(result);
} else {
  console.log('usage:');
  console.log('  node index.js [Integer (> 0)]');
}
