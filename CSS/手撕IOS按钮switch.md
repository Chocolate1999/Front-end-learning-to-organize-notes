## 手撕IOS按钮switch

>要求：纯CSS实现，只能有HTML+CSS且 switch 按钮能够点击切换，要有效果。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>实现IOS</title>
    <style>
        .switch-box {
            position: relative;
            height: 30px;
            display: inline-block;
        }
        .switch-input {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
        }

        .switch-label {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 30px;
            background: #e3e3e3;
            border-radius: 20px;
        }

        .switch-label::after {
            position: absolute;
            top: 3px;
            left: 3px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #fff;
            content: "";
            transition: .3s;
        }

        .switch-input:checked + .switch-label {
            background:#66CC33;
        }

        .switch-input:checked + .switch-label::after {
            left: 33px;
        }
    </style>
</head>

<body>
    <div class="switch-box">
        <input class="switch-input" type="checkbox" checked id="switch-input">
        <label class="switch-label" for="switch-input"></label>
    </div>
</body>

</html>
```
