var obj = {
  name: '一百个Chocolate',
  age: 18,
  info: {
    hobby: ['game', 'music', {
      a: 1
    }],
    career: {
      teacher: 0,
      engineer: 1
    }
  }
}

function deepClone(origin){
  if(origin == undefined || typeof origin !== 'object'){
    return origin;
  }

  if(origin instanceof Date){
    return new Date(origin);
  }
  if(origin instanceof RegExp){
    return new RegExp(origin);
  }
  const target = new origin.constructor();
  for(let k in origin){
    if(origin.hasOwnProperty(k)){
      target[k] = deepClone(origin[k]);
    }
  }
  return target;
}

const newObj = deepClone(obj);
newObj.info.hobby[2].a = 123;
console.log(obj,newObj);