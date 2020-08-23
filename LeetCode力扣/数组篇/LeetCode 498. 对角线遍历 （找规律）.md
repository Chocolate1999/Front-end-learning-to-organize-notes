## 题目

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

示例:

输入:

```javascript
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
```

输出:  `[1,2,4,7,5,3,6,8,9]`

解释:

 ![](https://img-blog.csdnimg.cn/20200823124439336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70#pic_center)
说明:

给定矩阵中的元素总数不会超过 100000 。


## 解题思路
对于m*n矩阵，所有方向应该有m+n-1次
```javascript
当 m=3, n=3 时
(0, 0)  m+n=0  正序

(0, 1)  m+n=1  倒叙
(1, 0)

(2, 0)  m+n=2  正序
(1, 1)
(0, 2)

(1, 2)  m+n=3  倒叙
(2, 1)

(2, 2)  m+n=4  正序
```

最后，以1作为开始的话，如果为奇数，后续获得的值 x 和 y的值反着拿，那么最大值也要反一下。

## 代码

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = (matrix) => {
    if (matrix.length === 0) return []
    let xlen = matrix.length
    let ylen = matrix[0].length
    let cnt = xlen + ylen - 1
    let res = []
    for (let i = 1; i <= cnt; i++) {
        let xMax = i % 2 === 0 ? xlen : ylen
        let yMax = i % 2 === 0 ? ylen : xlen
        for (let x = 0; x < i; x++) {
            let y = i - x - 1
            if (x >= xMax || y >= yMax) continue
            res.push(i % 2 === 0 ? matrix[x][y] : matrix[y][x])
        }
    }
    return res
};
```
