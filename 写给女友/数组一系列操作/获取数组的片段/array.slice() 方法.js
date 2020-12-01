let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let res = fruits.slice(1, 3);
let res1 = fruits.slice(1);
let res2 = fruits.slice(-1);
let res3 = fruits.slice(0, -1);
console.log(res); // [ 'Orange', 'Lemon' ]
console.log(res1);// [ 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(res2);// [ 'Mango' ]
console.log(res3);// [ 'Banana', 'Orange', 'Lemon', 'Apple' ]