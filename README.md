## 前言
回顾我的代码岁月，总是import xxx from 'xxx'或者const xxx = require('xxx')，却不知为什么要这么写。最近抽空把前端模块化的发展整理一下。接下来，让我们一起走进前端的历史，看看模块化的发展。

## IIFE（Immediately Invoked Function Expression）
先看一下IIFE模式的目录结构和代码内容

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./js/modules/module2.js"></script>
    <script src="./js/modules/module1.js"></script>
    <script>
      module1.func1()
    </script>
  </body>
</html>


// module1.js
;(function (m2) {
  // 模块中的方法
  const func1 = () => {
    console.log("module2.data2", m2.data2)
    console.log("我是module1中的函数")
  }
  // 暴露的模块
  window.module1 = { func1 }
})(module2)


// module2.js
;(function () {
  // 模块中的数据
  const data2 = "我是module2中的数据"
  // 暴露的模块
  window.module2 = { data2 }
})()

```
### 
## CommonJS
## RequireJS & AMD（Asynchronous Module Definition）
## SeaJS & CMD（Common Module Definition）
## UMD
## ES Module