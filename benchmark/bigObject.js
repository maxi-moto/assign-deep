'use strict';

const bigObject = {
  array: [{
    obj: 1,
    deepArray: [{
      deepObject: 1
    }, {
      deepObjectWithArray: 1,
      array: [ 1, 2, 3]
    }]
  }, {
    obj: 2
  }],
  obj: {
    test: 1,
    testArray: [ { testObject: 1 } ]
  }
};

module.exports = bigObject;
