/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   nums1.splice(m)
//   nums2.splice(n)
//   nums1.push(...nums2)
//   return nums1.sort((a,b)=>a-b)
// };
let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6], n = 3
console.log(merge(nums1,m,nums2,n))

var merge = function(nums1, m, nums2, n) {
  let len1 = m-1
  let len2 = n-1
  let tail = n+m-1
  while(len2>=0){
    if(nums1[len1]>nums2[len2]){
      nums1[tail] = nums1[len1]
      tail--
      len1--
    }else{
      nums1[tail] = nums2[len2]
      tail--
      len2--
    }
  }
  return nums1
};