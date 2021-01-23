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

function deepClone(origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }
  const hashKey = hashMap.get(origin);
  if (hashKey) {
    return hashKey;
  }

  const target = new origin.constructor();
  hashMap.set(origin, target);
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap);
    }
  }
  return target;
}

const newObj = deepClone(obj);
newObj.info.hobby[2].a = 123;
console.log(obj, newObj);