Function.prototype.myCall = function (context = window) {
    // console.log(context); // foo
    context.fn = this;
    // console.log(this); // bar:function
    var arr = [...arguments];
    arr.shift();
    let result = context.fn(...arr);
    delete context.fn;
    return result;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.myCall(foo, 'kevin', 18);
// kevin
// 18
// 1