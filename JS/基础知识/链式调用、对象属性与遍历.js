// var sched = {
//   wakeup: function(){
//     console.log('Running');
//     return this;
//   },
//   work: function(){
//     console.log('Wordking');
//     return this;
//   },
//   end: function(){
//     console.log('Ending');
//     return this;
//   }
// }
// sched.wakeup().work().end();

// var myLang = {
//   No1: 'HTML',
//   No2: 'CSS',
//   No3: 'JS',
//   myStudying: function(num){
//     console.log(this['No'+num]);
//   }
// }
// myLang.myStudying(1);

// var car = {
//   brand: 'Benz',
//   color: 'red',
//   displacement: '3.0',
//   lang: '5',
//   width: '2.5'
// }
// for(var key in car){
//   console.log(car.key);
//   console.log(car[key]);
// }

// var obj = {
//   name: 'Chocolate',
//   age: 21
// }


// function Car() {
//   this.brand = 'Benz';
//   this.color = 'red';
//   this.displacement = '3.0';
// }

// Car.prototype = {
//   lang: 5,
//   width: 2.5
// }

// Object.prototype.name = 'Object';

// var car = new Car();
// for (var key in car) {
//   if (car.hasOwnProperty(key)) {
//     console.log(key + ':' + car[key]);
//   }
// }


function Car(){}
var car = new Car();

function Person(){}
var p = new Person();

console.log(car instanceof Car);
console.log(car instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);