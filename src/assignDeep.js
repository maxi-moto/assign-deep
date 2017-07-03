'use strict'

const assignDeep = (target, ...sources) => {
  sources.forEach((source) => {
    target = Object.assign(target, source);

    for (let key in source) {
      let property = source[key];
      let isArray = Array.isArray(property);
      let type = typeof property;

      if (!isArray && type === 'object') {
        target[key] = assignDeep({}, property);
      }

      if (isArray) {
        target[key] = property.map(item => assignDeep({}, item));
      }
    }
  });

  return target;
};

module.exports = assignDeep;
