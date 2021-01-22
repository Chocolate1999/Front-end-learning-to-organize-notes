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

function deepClone(origin, target) {
  var tar = target || {};
  var toStr = Object.prototype.toString;
  var arrType = '[object Array]';
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      if (typeof origin[k] === 'object' && origin[k] !== null) {
        tar[k] = toStr.call(origin[k]) === arrType ? [] : {};
        deepClone(origin[k], tar[k]);
      } else {
        tar[k] = origin[k];
      }
    }
  }
  return tar;
}

const newObj = deepClone(obj, {});
newObj.info.hobby[2].a = 123;
console.log(obj,newObj);