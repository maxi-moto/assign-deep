const bigObject = require('./bigObject');
const assignDeep = require('../src/assignDeep');
const _ = require('lodash');

const RUNS = 10;

function average (array) {
  return array.reduce((sum, item) => sum + item, 0) / array.length;
}

let stringifyTimes = [];
let cloneDeepTimes = [];
let mergeTimes = [];
let assignDeepTimes = [];

let runIndex = 0;
let start;
let end;
while (runIndex < RUNS) {
  start = process.hrtime();
  JSON.parse(JSON.stringify(Object.assign({}, bigObject)));
  end = process.hrtime(start);
  stringifyTimes.push(end[1] / 1000000);

  start = process.hrtime();
  _.cloneDeep({}, bigObject);
  end = process.hrtime(start);
  cloneDeepTimes.push(end[1] / 1000000);

  start = process.hrtime();
  _.merge({}, bigObject);
  end = process.hrtime(start);
  mergeTimes.push(end[1] / 1000000);

  start = process.hrtime();
  assignDeep({}, bigObject);
  end = process.hrtime(start);
  assignDeepTimes.push(end[1] / 1000000);

  runIndex++;
}

console.log(`Benchmarks for ${RUNS} runs`);
console.log(`stringify-parse: ${ average(stringifyTimes) }`);
console.log(`lodash:cloneDeep: ${ average(cloneDeepTimes) }`);
console.log(`lodash:merge: ${ average(mergeTimes) }`);
console.log(`assignDeep: ${ average(assignDeepTimes) }`);
