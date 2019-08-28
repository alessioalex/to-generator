# to-generator

Transforms an `Array` | `Object` into a [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object.

## usage

```js
const toGenerator = require('to-generator');

[
  [1, 2, 33, 44],
  { foo: 'bar', baz: 22, boom: 34, fofofo: [2, 3, 4] }
].forEach(source => {
  console.log('current item: ', source);
  console.log('---');

  for (const item of toGenerator(source)) {
    console.log('>', item);
  }

  console.log('---------------');
});

// outputs:
/*
current item:  [ 1, 2, 33, 44 ]
---
> 1
> 2
> 33
> 44
---------------
current item:  { foo: 'bar', baz: 22, boom: 34, fofofo: [ 2, 3, 4 ] }
---
> { key: 'foo', value: 'bar' }
> { key: 'baz', value: 22 }
> { key: 'boom', value: 34 }
> { key: 'fofofo', value: [ 2, 3, 4 ] }
---------------
*/
```

## license

[MIT](https://alessioalex.mit-license.org/)
