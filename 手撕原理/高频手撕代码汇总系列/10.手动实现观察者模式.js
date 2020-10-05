/* 
观察者模式（基于发布订阅模式） 有观察者，也有被观察者

观察者需要放到被观察者中，被观察者的状态变化需要通知观察者 我变化了 内部也是基于发布订阅模式，收集观察者，状态变化后要主动通知观察者
*/
// 被观察者 例如学生
class Subject{
  constructor(name){
    this.name = name;
    this.state = '开心的';
    this.observers = []; // 存储所有的观察者
  }
  // 收集所有的观察者
  attach(observer){
    this.observers.push(observer);
  }
  // 更新被观察者的状态
  setState(newState){
    this.state = newState; 
    this.observers.forEach(observer=>observer.update(this)); // 通知观察值，更新状态
  }
}
// 观察者 例如老师、家长
class Oberver{
  constructor(name){
    this.name = name;
  }
  update(student){
    console.log('当前' + student.name + '学生的状态是' + student.state + ',已经通知了' + this.name);
  }
}

let student = new Subject('小羊');
let parent = new Oberver('家长');
let teacher = new Oberver('老师');

student.attach(parent);
student.attach(teacher);

student.setState('成绩优秀！');
// 当前小羊学生的状态是成绩优秀！,已经通知了家长
// 当前小羊学生的状态是成绩优秀！,已经通知了老师
