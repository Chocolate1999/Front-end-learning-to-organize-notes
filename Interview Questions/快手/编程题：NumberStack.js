function NumberStack() {
  this.stack = [] //存储栈
  this.maxStack = [] //辅助栈，从小到大的排序
}

NumberStack.prototype.push = function (num) {
  if (typeof num !== 'number') return false
  this.stack.push(num)
  if (!this.maxStack.length) {
    this.maxStack.push(num)
  } else {
    let len = this.maxStack.length
    for (let i = 0; i < len; i++) {
      if (num < this.maxStack[i]) {
        this.maxStack.splice(i, 0, num)
        break
      }
    }
  }
}

NumberStack.prototype.pop = function () {
  let num = this.stack.pop()
  let idx = this.maxStack.indexOf(num)
  if (idx !== -1) {
    this.maxStack.splice(idx,1)
  }
}

NumberStack.prototype.maxN = function (n) {
  if(n<1 || n>this.maxStack.length) return false
  return this.maxStack[this.maxStack.length-n]
}
