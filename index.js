'use strict';

const isPlainObject = require('is-plain-object');

function toGenerator(source) {
  if (Array.isArray(source)) {
    return arrayToGenerator(source);
  }

  if (isPlainObject(source)) {
    return objectToGenerator(source);
  }

  throw new Error('toGenerator() only supports plain Arrays and Objects');
}

function objectToGenerator(source) {
  let index = 0;
  const keys = Object.keys(source);

  return (function* generator() {
    while (index < keys.length) {
      yield {
        key: keys[index],
        value: source[keys[index]]
      };

      index++;
    }
  }());
}

function arrayToGenerator(source) {
  let index = 0;

  return (function* generator() {
    while (index < source.length) {
      yield source[index];

      index++;
    }
  }());
}

module.exports = toGenerator;
