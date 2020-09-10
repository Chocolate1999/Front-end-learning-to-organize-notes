/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0,right = nums.length-1
  while(left<right){
    let tmp = arr[left] + arr[right]
    if(tmp === target){
      return [left,right]
    }else if(target<tmp){
      right--
    }else if(target>tmp){
      left++
    }
  }
};
let arr = [1,2,3,4,5]
let target = 6
console.log(twoSum(arr,target))