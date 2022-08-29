/*
test example of a function.
Test the 'sum' function in '/client/src/components/Comparison/sum.jsx'
in command line run 'npm test'
*/
const sum = require('../components/Comparison/sum.jsx');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
