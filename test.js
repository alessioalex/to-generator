'use strict';

const { deepStrictEqual: shouldBeEqual } = require('assert').strict;
const toGenerator = require('./');

const expected = [
  [1, 2, 33, 44],
  [
    { key: 'foo', value: 'bar' },
    { key: 'baz', value: 22 },
    { key: 'boom', value: 34 },
    { key: 'fofofo', value: [2, 3, 4] }
  ]
];

const output = [];

[
  [1, 2, 33, 44],
  { foo: 'bar', baz: 22, boom: 34, fofofo: [2, 3, 4] }
].forEach((source, index) => {
  output[index] = [];

  for (const item of toGenerator(source)) {
    output[index].push(item);
  }
});

shouldBeEqual(expected, output);
