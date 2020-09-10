// 题解
// https://leetcode-cn.com/problems/shuffle-an-array/solution/js-xi-pai-suan-fa-by-heronwan/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function () {
  return this.nums
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function () {
  let arr = [...this.nums]
  let len = arr.length
  for (let i = 0; i < len; i++) {
      randNum = Math.floor(Math.random() * (len - i) + i)
      let tmp = arr[i]
      arr[i] = arr[randNum]
      arr[randNum] = tmp
  }
  return arr
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/