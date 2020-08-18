## 写作初心
### 提问：为什么要学习数据结构和算法？

如果你能明确这个问题的答案，just do it ！直接跳过后面内容，开始刷题就好了。


####  解决问题的思想
计算机只是一个很冰冷的机器，你给他下发什么样的指令，它就能作出什么样的反应。
而开发工程师要做的是如何把实际的问题转化成计算机的指令，如何转化，来看看《数据结构》的经典说法：

>设计出数据结构， 在施加以算法就行了。

所以，很重要的一点，数据结构和算法对建立解决问题的思想非常重要。

>如果说 Java 是自动档轿车，C 就是手动档吉普。数据结构呢？是变速箱的工作原理。你完全可以不知道变速箱怎样工作，就把自动档的车子从 A 开到 B，而且未必就比懂得的人慢。写程序这件事，和开车一样，经验可以起到很大作用，但如果你不知道底层是怎么工作的，就永远只能开车，既不会修车，也不能造车。如果你对这两件事都不感兴趣也就罢了，数据结构懂得用就好。但若你此生在编程领域还有点更高的追求，数据结构是绕不开的课题。

####  面试
这是非常现实的一点，也是很多前端学习数据结构和算法的原因。

一般对待算法的态度会分为以下几类：

- `Google` 、`Microsoft` 等知名外企在面试工程师时，算法是起决定性因素的，前端工程师也是一样，基本是每一轮都会考察，即使你有非常强的背景，也有可能因为一两道算法答的不好而与这样的企业失之交臂。

- 第二类，算法占重要因素的，国内的某些大厂在面试时，也会把数据结构和算法作为重要的参考因素，基本是面试必考，如果你达不到一定的要求，会直接挂掉。

- 第三类，起加分作用，很多公司不会把数据结构和算法作为硬性要求，但是也会象征性的出一些题目，当你把一道算法题答的很漂亮，这绝对是加分项。

可见，学好数据结构和算法对你跳槽更好的公司或者拿到更高的薪水，是非常重要的。


## 排序
### 时间复杂度
一个算法的时间复杂度反映了程序运行从开始到结束所需要的时间。把算法中基本操作重复执行的次数（频度）作为算法的时间复杂度。

没有循环语句，记作 `O(1)`，也称为常数阶。只有一重循环，则算法的基本操作的执行频度与问题规模n呈线性增大关系，记作 `O（n）`，也叫线性阶。

常见的时间复杂度有：

- `O(1)`: Constant Complexity: Constant 常数复杂度
- `O(log n)`: Logarithmic Complexity: 对数复杂度
- `O(n)`: Linear Complexity: 线性时间复杂度
- `O(n^2)`: N square Complexity 平⽅方
- `O(n^3)`: N square Complexity ⽴立⽅方
- `O(2^n)`: Exponential Growth 指数
- `O(n!)`: Factorial 阶乘

![](https://img-blog.csdnimg.cn/20200612122631963.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### 空间复杂度
一个程序的空间复杂度是指运行完一个程序所需内存的大小。利用程序的空间复杂度，可以对程序的运行所需要的内存多少有个预先估计。

一个程序执行时除了需要存储空间和存储本身所使用的指令、常数、变量和输入数据外，还需要一些对数据进行操作的工作单元和存储一些为现实计算所需信息的辅助空间。


### 快速排序

>选择一个目标值，比目标值小的放左边，比目标值大的放右边，目标值的位置已排好，将左右两侧再进行快排。


#### 写法1
需要开辟空间，如下代码所示，开辟两个存储空间 `left` 和 `right` ，每次递归直接返回 `left` 、`tmp`、`right` 拼接后的数组。

不过此方法写法比较简单 ，但需要一些空间来换。

```javascript
var arr=[1,12,4,5,6,3];
function quickSort(arr){
    if(arr.length<=1) return arr;
    var mid = Math.floor(arr.length/2);
    var tmp = arr.splice(mid,1);
    var left = [];
    var right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < tmp){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(tmp,quickSort(right)); //返回拼接数组
}
console.log(quickSort(arr));
```
#### 写法2
记录一个索引 `le` 从数组最左侧开始，记录一个索引 `re ` 从数组右侧开始

在 `le` < `re` 的条件下，找到右侧小于 `target` 的值 `arr[re]`，并将其赋值到 `arr[le]`

在 `le` < `re`的条件下，找到左侧大于 `target` 的值 `arr[le]` ，并将其赋值到 `arr[re]` 

这样让 `le=re`时，左侧的值全部小于 `target` ，右侧的值全部小于 `target`，将 `target` 放到该位置

此方法不需要额外存储空间，但写法思路稍有复杂。
```javascript
var arr=[1,12,4,5,6,3];
function quickSort(arr,start,end){
    if(end-start<1) return;
    const target = arr[start];
    let le = start;
    let re = end;
    while(le < re){
        while(le<re && arr[re]>=target) re--;
        arr[le] = arr[re];
        while(le<re && arr[le]<target) le++;
        arr[re] = arr[le];
    }
    arr[le] = target;
    quickSort(arr,start,le-1);
    quickSort(arr,le+1,end);
    return arr;
}
console.log(quickSort(arr,0,arr.length-1));
```
时间复杂度：平均 `O(nlogn) `，最坏 `O(n2)`，实际上大多数情况下小于 `O(nlogn)`

空间复杂度: `O(logn)`（递归调用消耗）

不稳定的排序

### 冒泡排序
>循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。下一次循环继续上面的操作，不循环已经排序好的数。
```javascript
var arr=[1,12,4,5,6,3];
function bubbleSort(arr){
    if(arr.length<=1) return arr;
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));
```

时间复杂度：`O(n2)`

空间复杂度: `O(1)`

稳定的排序

### 选择排序

>每次排序取一个最大或最小的数字放到前面的有序序列中。

```javascript
var arr=[1,12,4,5,6,3];
function selectSort(arr){
    if(arr.length<=1) return;
    let len=arr.length;
    for(let i=0;i<len;i++){
        let minx=i;
        for(let j=i;j<len;j++){
            if(arr[j]<arr[minx]){
                minx=j;
            }
        }
        [arr[i],arr[minx]] = [arr[minx],arr[i]];
    }
    return arr;
}
console.log(selectSort(arr));
```
时间复杂度：`O(n2)`

空间复杂度: `O(1)`

不稳定的排序

### 插入排序

>将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。


```javascript
var arr=[1,12,4,5,6,3];
function insertSort(arr){
    if(arr.length<=1) return arr;
    let len=arr.length;
    for(let i=0;i<len;i++){
        let minx=arr[i];
        let j;
        for(j=i-1;j>=0;j--){
            if(arr[j]<minx) break;
            arr[j+1]=arr[j];
        }
        arr[j+1]=minx;
    }
    return arr;
}
console.log(insertSort(arr));
```
时间复杂度：`O(n2)`

空间复杂度: `O(1)`

稳定的排序

### 归并排序
>将大序列二分成小序列，将小序列排序后再将排序后的小序列归并成大序列。

#### 写法1
分割数组时直接将数组分割为两个数组，合并时直接合并数组。

优点：思路简单，写法简单

缺点：空间复杂度略高，需要复制多个数组
```javascript
var arr=[1,12,4,5,6,3];
function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    let ans = [];
    while(left.length && right.length){
        if(left[0]<right[0]) ans.push(left.shift());
        else ans.push(right.shift());
    }
    while(left.length) ans.push(left.shift());
    while(right.length) ans.push(right.shift());
    return ans;
}
console.log(mergeSort(arr));
```
#### 写法2

```javascript
var arr=[1,12,4,5,6,3];
function mergeSort(arr,left,right,tmp){
    if(arr.length<=1) return arr;
    if(left<right){
        let mid = Math.floor((left+right)/2);
        mergeSort(arr,left,mid,tmp);
        mergeSort(arr,mid+1,right,tmp);
        merge(arr,left,right,tmp);
    }
    return arr;
}
function merge(arr,left,right,tmp){
    const mid = Math.floor((left+right)/2);
    let le = left;
    let re = mid+1;
    let cnt=0;
    while(le<=mid && re<=right){
        if(arr[le]<arr[re]){
            tmp[cnt++]=arr[le++];
        }else{
            tmp[cnt++]=arr[re++];
        }
    }
    while(le<=mid){
        tmp[cnt++]=arr[le++];
    }
    while(re<=right){
        tmp[cnt++]=arr[re++];
    }
    cnt=0;
    for(let i=left;i<=right;i++){
        arr[i]=tmp[cnt++];
    }
}
console.log(mergeSort(arr,0,arr.length-1,[]));
```

### 堆排序
>创建一个大顶堆，大顶堆的堆顶一定是最大的元素。交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。从后往前以此和第一个元素交换并重新构建，排序完成。

<a href="https://juejin.im/post/5cb8714be51d456e6154b425">推荐阅读：搞定JavaScript算法系列--堆排序</a>

```javascript
var arr=[1,12,4,5,6,3];
function heapSort(arr){
    if(arr.length<=1) return arr;
    createHeap(arr);
    for(let i=arr.length-1;i>=0;i--){
        [arr[i],arr[0]] = [arr[0],arr[i]];
        adjust(arr,0,i);
    }
    return arr;
}
//创建大顶堆
function createHeap(arr){
    const len = arr.length;
    const start = parseInt(len/2)-1;
    for(let i=start;i>=0;i--){
        adjust(arr,i,len);
    }
}
//下沉操作
function adjust(arr,target,len){
    for(let i=2*target+1;i<len;i=2*i+1){
        //找到孩子节点中最大的
        if(i+1<len && arr[i+1]>arr[i]){
            i=i+1;
        }
        //下沉
        if(arr[i]>arr[target]){
            [arr[i],arr[target]] = [arr[target],arr[i]];
            target=i;
        }else{
            break;
        }
    }
}
console.log(heapSort(arr));
```

## 分治

<a href="https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/">面试题51. 数组中的逆序对</a>

### 面试题51. 数组中的逆序对
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
let sum = 0;
var reversePairs = function(nums) {
    sum=0;
    mergeSort(nums);
    return sum;
};

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    let ans = [];
    while(left.length && right.length){
        if(left[0]<=right[0]) ans.push(left.shift());
        else{
            sum+=left.length;
            ans.push(right.shift());
        } 
    }
    while(left.length) ans.push(left.shift());
    while(right.length) ans.push(right.shift());
    return ans;
}   
```
时间复杂度O(nlogn)

空间复杂度O(n)

有了之前归并排序的例子了，解决这道题就是小菜一碟了，本人还是觉得上述代码写的比较得心应手，写法2不容易掌握，那就还是用写法1吧，虽然会占用一点空间，但是可以快速而且简单地 `ac`这道 **困难** 题，对，你没看错，这就是 `leecode` 上面一道面试常考的一道 **困难题**，就考察了分治的思想，直接归并代码码上！

下面贴一个解题思路：



```javascript
这个题解假设你已经明白归并排序的原理。

就以arr = [7,5,6,4]这个例子来讲解为什么一遍归并排序就看可以解决逆序对的问题。

按照归并排序的思路，会将arr分解为arrL = [7,5],arrR = [6,4];

继续分解为arrLL = [7], arrLR = [5]; arrRL = [6], arrRR = [4];

自此分解完成。

接下来合并：

假设i为arrLL的数组下标，j为arrLR的数组下标, index为新数组res的下标，初始值都为0

首先arrLL与arrLR合并，因为arrLL[i] > arrLRj，

所以可以说明arrLL中7及其之后的所有数字都大于arrLR中的5，

也就是说7及其之后的所有元素都可以与5组成逆序对，

所以此时7及其之后的所有元素个数（leftLen - i）即我们要的逆序对数，需要添加到结果sum中。即sum += leftLen - 1

（这也就是此算法高效的地方，一次可以查找到好多次的逆序对数，而且不会重复）

合并之后为arrL=[5,7].

根据上述方法将arrRL和arrRR合并为arrR=[4,6];

现在将arrL和arrR合并为arr：

5 > 4，说明5及其之后的所有元素都能与4组成逆序对；所以sum += （leftLen - 1）；

5 < 6，正常排序，不做处理

7 > 6，说明7及其之后的所有元素都能与6组成逆序对；所以sum += （leftLen - 1）；

7，正常排序，不作处理

最后sum就是所有逆序对的总个数！
```

而我用归并排序写法2写的代码，相对来说，更加清晰易懂，与上文解题思路差不多。

## 数学运算
### 二进制中1的个数
<a href="https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/">面试题15. 二进制中1的个数</a>

这是一道考察二进制的题目

二进制或运算符`（or）`：符号为 `|`，表示若两个二进制位都为0，则结果为0，否则为1。

二进制与运算符`（and）`：符号为 `&`，表示若两个二进制位都为1，则结果为1，否则为0。

二进制否运算符`（not）`：符号为 `~`，表示对一个二进制位取反。

异或运算符`（xor）`：符号为 `^`，表示若两个二进制位不相同，则结果为1，否则为0

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt=0;
    let ff=1;
    while(ff){
        if(ff&n) ++cnt;
        ff<<=1;
    }
    return cnt;
};
```

### 数值的整数次方
其实这道题，应该是考察的快速幂知识，但是我不造为什么 `js`，对于负数情况会超时，用 `C++` 版本就一下过了。
```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x==1 || n==0) return 1;
    let ans = 1;
    let num = n;
    if(n<0){
        for(let i=0;i<Math.abs(num);i++){
            ans*=x;
        }
        return ans? 1/ans:false;
    }else{
        while(num){
            if(num&1) ans*=x;
            x*=x;
            num>>=1;
        }
        return ans;
    }
};
```
还是贴上C++版本吧，快速幂简单就过了。
```cpp
class Solution {
public:
    double myPow(double x, int n) {
        if(x==1 || n==0) return 1;
        double res=1;
        long num=n;
        if(n<0){
            x=1/x;
            num=-num;
        }
        while(num){
            if(num&1) res*=x;
            x*=x;
            num>>=1;
        }
        return res;
    }
};
```

### 数组中只出现一次的数字

<a href="https://leetcode-cn.com/problems/single-number/">136. 只出现一次的数字</a>

考察异或运算 `^`，一个数和0进行异或等于它本身，而自己和自己异或等于0，那么最后就只剩下出现奇数次的数字了。
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans=0;
    for(let i=0;i<nums.length;i++){
        ans^=nums[i];
    }
    return ans;
};
```

### 不用加减乘除做加法
<a href="https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/">面试题65. 不用加减乘除做加法</a>

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    if(b==0) return a;
    return add(a^b,(a&b)<<1);
};
```
本题主要考察二进制与位运算，两个二进制相异或即可相加，相与判断进位。
### 字符串转换成整数
<a href="https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/">面试题67. 把字符串转换成整数</a>

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    str = str.trim();
    let ans = parseInt(str);
    if(isNaN(ans)) return 0;
    let minx = Math.pow(-2,31);
    let maxx = Math.pow(2,31)-1;
    if(ans < minx) return minx;
    else if(ans > maxx) return maxx;
    return ans;
};
```

### 整数中1出现的次数

<a href="https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/">面试题43. 1～n整数中1出现的次数</a>
### 1+2+3+...+n

<a href="https://leetcode-cn.com/problems/qiu-12n-lcof/submissions/">面试题64. 求1+2+…+n</a>

#### 写法1
使用递归，使用&&短路来终止递归
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n&&(n+sumNums(n-1));
};
```
#### 写法2
求和公式为` n(n+1)/2 = (n方+n)/2`

可以用 `Math.pow` 函数求 `n方`，用位运算代替除法
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return (Math.pow(n, 2) + n) >> 1;
};
```

### 丑数
<a href="https://leetcode-cn.com/problems/chou-shu-lcof/">面试题49. 丑数</a>

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n<=0) return 0;
    let arr = [1];
    let i2=i3=i5=0;
    while(arr.length < n){
        arr.push(Math.min(arr[i2]*2, arr[i3]*3, arr[i5]*5));
        let cur = arr[arr.length-1];
        while(arr[i2]*2 <= cur) i2++;
        while(arr[i3]*3 <= cur) i3++;
        while(arr[i5]*5 <= cur) i5++;
    }
    return arr[n-1];
};
```
**思路**

丑数只能被2、3、5整除，说明第n个丑数只能是0 - n-1中某个丑数✖️2、✖️3、✖️5的结果。

而且，这个数即第0 - n-1个丑数✖️2、✖️3、✖️5的结果中比第n-1个丑数大的最小值。

按照上面的规律，我们可以依次求出第0 - n个丑数。

简单做法：

- 1.每次把第0 - n-1个丑数✖️(2、3、5)
- 2.分别找到第0 - n-1个丑数✖️2、✖️3、✖️5的结果中比第n-1个丑数大的最小值。
- 3.比较三个数取最小值加入到丑数队列中

优化：

- 1.前面的数不必每个都乘
- 2.记录下✖️(2、3、5)后刚好比当前最大丑数大的这三个值的下标 i2,i3,i5
- 3.下次比较从这 i2,i3,i5 三个下标开始乘起
- 4.最后取arr[i2]✖️2、arr[i3]✖️3、arr[i5]✖️5 的最小值

## 查找
### 二维数组查找


### 在排序数组中查找数字


### 整数中1出现的次数





## DFS和BFS
