# Polyfill for Array.prototype.takeByIndex

[![Build Status](https://travis-ci.org/ayarushin/array-take-by-index-polyfill.svg?branch=master)](https://travis-ci.org/ayarushin/array-take-by-index-polyfill)

Polyfill for array method `takeByIndex()`

### Usage

```javascript

var testArray = ['John Smith', 'Sherlock Holms', 'James Moriarty'];

testArray.takeByIndex(0);     // 'John Smith'
testArray.takeByIndex(1);     // 'Sherlock Holms'
testArray.takeByIndex(2);     // 'James Moriarty'

testArray.takeByIndex(-1);    // 'James Moriarty'
testArray.takeByIndex(-2);    // 'Sherlock Holms'
testArray.takeByIndex(-3);    // 'John Smith'

```
