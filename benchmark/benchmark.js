const bench = require('bench');

const bigObject = require('./bigObject');
const assignDeep = require('../src/assignDeep');
const _ = require('lodash');

const RUNS = 100;

let results = bench.run([
  // { label: 'stringify-parse', fun: JSON.stringify(), data: JSON.parse(Object.assign({}, bigObject)) },
  { label: 'lodash:cloneDeep', fun: _.cloneDeep, data: [{}, bigObject] },
  { label: 'lodash:merge', fun: _.merge, data: [{}, bigObject] },
  { label: 'assignDeep', fun: assignDeep, data: [{}, bigObject] }
], RUNS);

bench.prettyPrint(bench.average(results));

