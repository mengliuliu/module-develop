# 一文搞懂前端模块化发展

## 前言

回顾我的代码岁月，总是import xxx from 'xxx'或者const xxx = require('xxx')，却不知为什么要这么写。最近抽空把前端模块化的发展整理一下。接下来，让我们一起走进前端的历史，看看模块化的发展。

## IIFE（Immediately Invoked Function Expression）

文件结构如下

```text
├── IIFE
│   ├── images
│   │   └── result.jpeg
│   ├── index.html
│   ├── index.js
│   └── js
│       └── modules
│           ├── module1.js
│           └── module2.js
```

代码内容如下

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
    <script src="./index.js">
    </script>
  </body>
</html>


// index.js
module1.func1()


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

执行结果如下
![结果](./IIFE//images/result.jpeg)

### 分析

上面代码中定义了两个模块，分别为module1、module2。module1依赖module2，并且每个模块的导出对象都挂载在window上。如果module1依赖module2，那么module2必须在module1之前引入。都说了这么多了，相信各位大佬们应该知道IIFE有哪些弊端了吧。

### 弊端

- 模块的引入必须按照特定的先后顺序，导致模块不好复用
- 模块的名字容易命名冲突，导致意想不到的结果
- 请求次数过多，有多少个模块就要发送多少次请求（这个问题在出现了打包工具才得已解决）

## CommonJS

## RequireJS & AMD（Asynchronous Module Definition）

## SeaJS & CMD（Common Module Definition）

## UMD

## ES Module
