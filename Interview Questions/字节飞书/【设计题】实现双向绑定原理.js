/* 
题目：实现一个双向绑定，要求修改修改input，自动更新到p上面

<input id="input" />
<p id="value" /> */

const data = {
  msg: ''
}

function updater(key, val) {
  if (key === 'msg') {
    document.getElementById('value').innerHTML = val;
  }
}

let input = document.getElementById('input');
input = addEventListener('change', function () {
  data.msg = this.value;
})

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      return val;
    },
    set(newVal) {
      updater(key, newVal);
      val = newVal;
    }
  })
}

function observer(obj) {
  if (typeof obj === 'object' && typeof obj !== null) {
    for (let key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
}
observer(data);