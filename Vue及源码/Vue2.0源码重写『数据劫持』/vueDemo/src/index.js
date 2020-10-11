import Vue from 'vue';
// options
let vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '学生列表',
      classNum: 1,
      total: 2,
      teachers: ['张三', '李四'],
      info:{
        club:{
          name: '篮球',
          num: 30
        }
      },
      students: [
        {
          id: 1,
          name: '小红'
        },
        {
          id: 2,
          name: '小明'
        }
      ]
    }
  }
})

console.log(vm.title); // 学生列表
console.log(vm.info);