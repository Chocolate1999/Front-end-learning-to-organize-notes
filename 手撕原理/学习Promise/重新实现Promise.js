class myPromise{
    constructor(exc){
        if(typeof exc !== 'function'){
            throw new TypeError('this is not a function!')
        }
        this.initValue();
        this.initBind();
        exc(this.resolve,this.reject);
    }
    initValue(){
        this.state = 'pending';
        this.value = null;
        this.reason = null;
    }
    initBind(){
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }
    resolve(value){
        if(this.state === 'pending'){
            this.state = 'resolve';
            this.value = value;
        }
    }
    reject(reason){
        if(this.state === 'pending'){
            this.state = 'reject';
            this.reason = reason;
        }
    }
    then(resolve,reject){
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