![](https://img-blog.csdnimg.cn/20200315204645980.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### 引言
<hr/>

金三银四，特地整理一份面试题，现介绍本文特色：
1、适合前端，需要面试找工作
2、即将毕业面临实习，积累经验
3、从务实基础到彻底弄懂
4、探索框架源码，研究前端必备算法
5、直击阿里、腾讯、美团、今日头条等大厂原题，逐步引入
6、学完即准备投简历


### BAT/TMD这样的大公司是如何面试的
<hr/>


注意嗷，在这里TMD可不是骂人的话哦，可能你知道BAT，但TMD你知道么？（不知道赶紧去百度！）

T（今日头条）M（美团）D（滴滴）成为了BAT之后互联网江山的新巨头


### 相关文章

<a href="https://blog.csdn.net/weixin_42429718/article/details/104885679">【金三银四】一个问题就知道你会不会CSS了</a>

<a href="https://blog.csdn.net/weixin_42429718/article/details/104907304">【金三银四】一个问题就知道你会不会JS了 阿里、头条真题解析</a>

<a href="https://chocolate.blog.csdn.net/article/details/104930855">【金三银四】一个问题就知道你看没看过源码了 深度挖掘必问源码题</a>

### 算法题引入

其实算法对于前端来说并没有后端那么看重，但是面试也是常问的，关键在于考察你的思维逻辑能力


##### 1.数组去重和排序的多种实现
**数组去重**

第一种方法：ES6 - 直接用Set
```javascript
let arr=[12,23,15,12,48,55,16,12,6,8,6,10];
/*直接用SET */
let a = [...new Set(arr)];
let b = Array.from(new Set(arr));
console.log(a,b);
```

![](https://img-blog.csdnimg.cn/20200318155249555.png)
第二种方法：拿出当前项和后续进行比较（会新增堆内存）
```javascript
/*拿出当前项和后续进行比较*/
let arr=[12,23,15,12,48,55,16,12,6,8,6,10];
let c=[];
for(let i=0;i<arr.length;i++){
    let item=arr[i],
        args=arr.slice(i+1);
    if(args.indexOf(item)==-1){
        //无重复项
        c.push(item);
    }
}
console.log(c);
```

第三种方法：对象键值对


**数组排序**

冒泡排序

插入排序

快速排序
##### 2.数组扁平化的N种实现方案
即将多维数组变为一位数组


第一种方法：使用ES6中`flat`方法
```javascript
/**数组扁平化 */
let arr= [
    [1,2,2],
    [3,4,5,5],
    [6,7,8,9,[11,12,[12,13,[14]]]],10
];
/**ES6方法: */
arr=arr.flat(Infinity);
console.log(arr);
```

第二种方法：使用toString()然后将字符串转化数字
```javascript
/**使用toString()然后将字符串转化数字 */
arr=arr.toString().split(',').map(item=>parseFloat(item));
console.log(arr);
```
第三种方法：转化JSON格式字符串 然后用正则替换所有的[]（比上一种方法多了一步，加了正则）
```javascript
/**转化JSON格式字符串 然后用正则替换所有的[] */
arr=JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item=>parseFloat(item));
console.log(arr);
```

第四种方法：循环验证是否为数组
```javascript
/**循环验证是否为数组 */
while(arr.some(item=>Array.isArray(item))){
    arr=[].concat(...arr);
}
console.log(arr);
```
##### 3.阿里面试题之斐波那契数列

```javascript
function fibonacci(count){
    function fn(count,curr=1,next=1){
        if(count==0){
            return curr;
        }else{
            return fn(count-1,next,curr+next);
        }
    };
    return fn(count);
}
```
##### 4.字节跳动经典算法题

```javascript
/**
 * 输入一个正数N，输出所有和为N的连续正数序列
 * 例如:输入15
 * 结果:[[1,2,3,4,5],[4,5,6],[7,8]]
 */

function createArr(n,len){
    let arr=new Array(len).fill(null),
        temp=[];
    arr[0]=n;
    arr=arr.map((item,index)=>{
        if(item==null){
            item=temp[index-1]+1;
        }
        temp.push(item);
        return item;
    });
    return arr;
}
function fn(count){
    let result=[];
    //=>求出中间值
    let middle=Math.ceil(count/2);
    //从1开始累加
    for(let i=1;i<=middle;i++){
        //控制累加多少次
        for(let j=2;;j++){
            //求出累加多次的和
            let total=(i+(i+j-1))*(j/2);
            if(total>count){
                break;
            }else if(total==count){
                result.push(createArr(i,j));
                break;
            }
        }
    }
    return result;
}
console.log(fn(15));
```

![](https://img-blog.csdnimg.cn/20200319105351250.png)

```javascript
学如逆水行舟，不进则退
```
