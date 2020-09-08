var RecentCounter = function() {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // 将新请求加入队列
  this.queue.push(t)
  // 3000ms 前发出的请求就出队列
  while(this.queue[0] < t-3000){
    this.queue.shift()
  }
  return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */