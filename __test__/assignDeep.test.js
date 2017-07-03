'use strict';

import assignDeep from '../src/assignDeep.js';

describe('assign deep', () => {
  test('simple copy -- essentially Object.assign()', () => {
    let original = { name: 'object 1' };
    let copy = assignDeep({}, original);

    expect(original).not.toBe(copy);
    expect(original).toEqual(copy);
  });

  test('the target object is modified as well as returned', () => {
    let target = { name: 'target object' };
    let source = { name: 'source' };
    let result = assignDeep(target, source);

    expect(result).toEqual(target);
  });

  test('multiple sources are allowed, with sources to the right overriding the left', () => {
    let target = { name: 'target object' };
    let source_1 = { name: 'source one object' };
    let source_2 = { name: 'source two object' };
    let result = assignDeep(target, source_1, source_2);

    expect(result.name).toBe(source_2.name);
  });

  test('multiple sources are merged', () => {
    let source_1 = { name: 'source object 1' };
    let source_2 = { otherName: 'other name for source object' };
    let result = assignDeep({}, source_1, source_2);

    expect(result.name).toBe(source_1.name);
    expect(result.otherName).toBe(source_2.otherName);
  });

  test('deeply copies objects', () => {
    let original = {
      deepObject: { name: 'deep object 1' }
    };

    let copy = assignDeep({}, original);

    expect(copy.deepObject).not.toBe(original.deepObject);
    expect(copy.deepObject).toEqual(original.deepObject);
  });

  test('deeply copies multiple objects', () => {
    let source_1 = {
      deepObject: { name: 'deep object 1' }
    };
    let source_2 = {
      deepObject2: { name: 'deep object 2' }
    }

    let result = assignDeep({}, source_1, source_2);

    expect(result.deepObject).not.toBe(source_1.deepObject);
    expect(result.deepObject).toEqual(source_1.deepObject);
    expect(result.deepObject2).not.toBe(source_2.deepObject2);
    expect(result.deepObject2).toEqual(source_2.deepObject2);
  });

  test('deeply copies arrays', () => {
    let original = [ { name: 'Object 1' } ];
    let copy = assignDeep([], original);

    expect(copy).not.toBe(original);
    expect(copy).toEqual(original);
  });

});
