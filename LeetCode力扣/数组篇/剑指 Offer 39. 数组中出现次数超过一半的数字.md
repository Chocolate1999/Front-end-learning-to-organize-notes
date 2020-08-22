
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
 

限制：

1 <= 数组长度 <= 50000

### map统计方法
```js
var majorityElement = function (nums) {
    let len = nums.length
    let map = new Map()
    for (let i = 0; i < len; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }
    for (let [key, val] of map.entries()) {
        if (val >= len / 2) return key
    }
};
```


### 数组排序找中间值法

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.sort()[Math.floor((nums.length-1)/2)]
};
```

## 投票法
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let votes = 0
  let x = 0
  for(let i=0;i<nums.length;i++){
    if(votes === 0)
        x = nums[i]
    votes+=( x===nums[i]? 1:-1)
  }
  return x
};
```

