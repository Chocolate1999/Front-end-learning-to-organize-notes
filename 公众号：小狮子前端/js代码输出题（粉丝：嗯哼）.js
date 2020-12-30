function test(arg) {
  this.x = arg;
  return this;
}

var x = test(5);
var y = test(6);

console.log(x.x);
console.log(y.x);