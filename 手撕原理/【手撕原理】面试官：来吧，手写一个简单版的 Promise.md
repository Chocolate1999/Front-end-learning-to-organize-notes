
重新实现Promise.js
```javascript
class myPromise{
    constructor(exc){
      //不能相信用户的输入，所以这里要做参数效验
        if(typeof exc !== 'function'){
            throw new TypeError('this is not a function!')
        }
        this.initValue();
        this.initBind();
        exc(this.resolve,this.reject);
    }
    //进行代码的优化&初始化
    initValue(){
    	//记录状态和值的改变
        //初始化值
        this.state = 'pending';  //初始状态
        this.value = null;  //终值
        this.reason = null; //据因
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }
     //成功后的一系列操作（状态的改变，成功回调的执行）
    resolve(value){
        if(this.state === 'pending'){
            this.state = 'resolve'; //状态进行改变
            this.value = value; //执行成功的回调，把终值进行赋值
        }
    }
    reject(reason){
    //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            this.state = 'reject'; //状态进行改变
            this.reason = reason; //执行成功的回调，把据因进行赋值
        }
    }
    then(resolve,reject){
    //  参数效验
        if(typeof resolve !== 'function'){
            resolve = function(value){
                return value;
            }
        }
        if(typeof reject !== 'function'){
            reject = function(reason){
                throw reason;
            }
        }
        if(this.state === 'resolve'){
            resolve(this.value);
        }
        if(this.state === 'reject'){
            reject(this.reason);
        }
    }
}
module.exports = myPromise;
```

test.js


```javascript
const myPromise = require('./重新实现Promise')

new myPromise((resolve,reject)=>{
    console.log('it is good');
    resolve(1);
}).then(value=>{
    console.log('value',value);
},reason=>{
    console.log('reason',reason);
})
```

```javascript
学如逆水行舟，不进则退
```
