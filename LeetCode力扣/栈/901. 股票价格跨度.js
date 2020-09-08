var StockSpanner = function() {
  // 存储股票跨度
  this.spanner = []
  // 存储股票价格
  this.stockPrice = []
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  // 对于第一天进行特殊判断
  if(!this.spanner.length){
      this.spanner.push(1)
      this.stockPrice.push(price)
      // 直接返回1
      return 1
  }
  let cnt = 0
  let idx = this.stockPrice.length-1
  while(price >= this.stockPrice[idx] && idx>=0){
      cnt += this.spanner[idx]
      idx -= this.spanner[idx]
  }
  // 加上本身
  cnt++
  // 进行更新操作，将当前股票价格和跨度入栈
  this.spanner.push(cnt)
  this.stockPrice.push(price)
  return cnt
};

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/