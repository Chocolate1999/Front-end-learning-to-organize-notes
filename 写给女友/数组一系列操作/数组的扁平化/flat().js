const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // [ 0, 1, 2, 3, 4 ]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2)); // [ 0, 1, 2, [ 3, 4 ] ]