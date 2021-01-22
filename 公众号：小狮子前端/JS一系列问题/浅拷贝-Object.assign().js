let obj = {
  name: 'Chocolate',
  score: {
    web: 99,
    math: 100
  }
}
let newObj = Object.assign({},obj);
newObj.score.web = 100;
console.log(obj.name); // 'Chocolate'
console.log(newObj.name); // 'Chocolate'
console.log(obj.score.web); // 100
console.log(newObj.score.web); // 100


