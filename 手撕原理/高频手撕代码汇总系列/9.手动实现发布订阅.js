/* 发布订阅的核心:： 每次event. emit（发布），就会触发一次event. on（注册） */

class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 订阅事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }
  // 触发事件
  emit(eventName) {
    this.events[eventName] && this.events[eventName].forEach(cb => cb());
  }
}

let em = new EventEmitter();

function workDay() {
  console.log("每天工作");
}
function makeMoney() {
  console.log("赚100万");
}
function sayLove() {
  console.log("找到另一伴");
}
em.on("task", workDay);
em.on("task", makeMoney);
em.on("task", sayLove);

em.emit("task");
