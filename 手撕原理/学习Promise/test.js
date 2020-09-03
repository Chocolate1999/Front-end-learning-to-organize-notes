const myPromise = require('./重新实现Promise')

new myPromise((resolve,reject)=>{
    console.log('it is good');
    resolve(1);
}).then(value=>{
    console.log('value',value);
},reason=>{
    console.log('reason',reason);
})