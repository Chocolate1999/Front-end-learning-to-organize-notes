// function* test(){
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let iter = test();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// function* test(){
//   console.log(0);
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let iter = test();


function* test(){
  let value1 = yield 1;
  console.log(value1);
  let value2 = yield 2;
  console.log(value2);
  let value3 = yield 3;
  console.log(value3);
  let value4 = yield 4;
  console.log(value4);
}

let iter = test();
console.log(iter.next('one'));
console.log(iter.next('two'));
console.log(iter.next('three'));
console.log(iter.next('four'));
console.log(iter.next());