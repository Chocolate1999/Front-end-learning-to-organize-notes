Function.prototype.call2 = function (context) {
    // console.log(context); // foo
    context.fn = this;
    // console.log(this); // bar:function
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }
    let result = context.fn(...args);
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

bar.call2(foo, 'kevin', 18);
// kevin
// 18
// 1