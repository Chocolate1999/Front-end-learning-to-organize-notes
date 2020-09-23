function Person(name, age) {
  this.name = name;
  this.age = age;
}

function myNew(){
  let func = [].shift.call(arguments);
  let obj = Object.create(func.prototype);
  let res = func.apply(obj,arguments);
  if(typeof res === 'object'){
    return res;
  }
  return obj;
}

let p = myNew(Person,'Chocolate',21);
console.log(p);