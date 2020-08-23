## 题目

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

```javascript
示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 代码
```javascript
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let ans = target - cur
        if (map.has(ans)) {
            return [i, map.get(ans)]
        } else {
            // 如果不存在，说明之前没出现过目标元素
            // 每次都存入当前元素和对应的索引
            map.set(cur, i)
        }
    }
};
```
