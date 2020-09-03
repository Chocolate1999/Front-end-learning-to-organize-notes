Promise.all = function(promises){
    let arr = new Array(promises.length);
    let cnt = 0;
    return new Promise((resolve,reject)=>{
        promises.forEach((val,index)=>{
            Promise.resolve(val).then(val=>{
                cnt++;
                arr[index] = val;
                if(cnt === promises.length){
                    resolve(promises);
                }
            },err=>{
                reject(err);
            })
        })
    })
}

Promise.all = function(promises){
    let arr = new Array(promises.length);
    let cnt = 0;
    return new Promise((resolve,reject)=>{
        promises.forEach((val,index)=>{
            Promise.resolve(val).then(val=>{
                cnt++;
                arr[index] = val;
                if(cnt === promises.length){
                    resolve(val);
                }
            },err=>{
                reject(err);
            })
        })
    })
}