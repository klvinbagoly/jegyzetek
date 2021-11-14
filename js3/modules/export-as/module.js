'use strict';

const pi = 3.14;
const sumValues = (a,b) => a+b+pi;
const subtractValues = (a,b) => a-b;
// exportálás más néven
export {
    sumValues as sum,
    subtractValues as sub
  }