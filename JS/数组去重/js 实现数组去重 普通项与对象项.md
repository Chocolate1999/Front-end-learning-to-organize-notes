>普通项

```cpp
let arr = [1, 2, 3, 2, 33, 55, 66, 3, 55];

/*第一种：遍历方法 */
let newArr = [];
arr.forEach(item=>{
    if(!newArr.includes(item)){
        newArr.push(item);
    }
})
console.log(newArr);

/*第二种：巧用Set */
let newArr2 = [...new Set(arr)];
console.log(newArr2);
```
![](https://img-blog.csdnimg.cn/20200618145518774.png)


>对象项

```cpp
let arr = [
    {id: 1, name: 'aa'},
    {id: 2, name: 'cc'},
    {id: 3, name: '前端开发'},
    {id: 1, name: 'web前端'}
];

const mp = new Map(arr.map(item=>[item['id'],item]));
console.log([...mp.values()]);

const unique = (arr,key)=>{
    return [...new Map(arr.map(item=>[item[key],item])).values()];
}
console.log(unique(arr,'id'));
```
![](https://img-blog.csdnimg.cn/20200618145531873.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

```cpp
学如逆水行舟，不进则退
```
