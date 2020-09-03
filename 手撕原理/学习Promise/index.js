
class Promise{
    constructor(exc){
        //参数校验
        if(typeof exc !== 'function'){
            throw new TypeError('Promise resolve $(exc) is not a function ');
        }
    }
}
new Promise(1);