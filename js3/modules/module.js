'use strict';

const pi = 3.14;
export const sumValues = (a,b) => a+b+pi;
export const subtractValues = (a,b) => a-b;
// Export : ezeket lehet importálni más fájlokba.
// Egy objektumot hoz létre, amely tartalmazza a két függvényt.

// Bár a "pi" nincs importálva, nem érhető el az app.js-ben, de az importált fv. tudja használni.

// Vagy:
// export {
//   sumValues,
//   subtractValues
// }