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

### IIFE分析

上面代码中定义了两个模块，分别为module1、module2。module1依赖module2，并且每个模块的导出对象都挂载在window上。如果module1依赖module2，那么module2必须在module1之前引入。都说了这么多了，相信各位大佬们应该知道IIFE有哪些弊端了吧。

### IIFE总结

- 模块的引入必须按照特定的先后顺序，导致模块不好复用
- 模块的名字容易命名冲突，导致意想不到的结果
- 请求次数过多，有多少个模块就要发送多少次请求（这个问题在出现了打包工具才得已解决）

## CommonJS

文件结构如下

```text
├── CommonJS
│   ├── images
│   │   └── result.jpeg
│   ├── index.js
│   └── js
│       └── modules
│           ├── module1.js
│           └── module2.js
```

代码内容如下

```javascript
// index.js
const module1 = require("./js/modules/module1")
module1.func1()


// module1.js
const module2 = require("./module2")

const func1 = () => {
  console.log("module2.data2", module2.data2)
  console.log("module1中的func1")
}

module.exports = {
  func1,
}



// module2.js
exports.data2 = "我是module2中的数据"
```

执行结果如下
![结果](./CommonJS/images/result.jpeg)

### CommonJS分析

1. 导出

    CommonJS模块通过module.exports或exports导出模块。module是个对象，代表当前模块，module对象有个属性叫exports，并且模块内有个变量叫exports指向modules.exports。换句话说就是模块内部有一条类似于这样的代码var exports = module.exports。

2. 导入

    CommonJS模块通过require导入模块。注意这一切都集成在node中了，只要你使用的require加载模块，被加载的文件就被默认为CommonJS模块。其实require一个模块主要做了两件事，一是执行这个文件，二是得到这个文件的导出对象。

3. 注意

    CommonJS是运行时同步加载，这里说明一下。由于js是解释型语言，所以代码需要先解释在运行，对于解释你暂且把它理解成编译吧。例如var n = 10，就是执行到这行代码，js引擎线程会告诉计算机这行代码需要在计算机内部开辟一部分内存啥啥的，然后再去运行，比如给刚刚声明的变量赋值（往刚刚开辟的内存区域存放一个值）。

### CommonJS总结

- CommonJS解决了命名冲突，模块不好复用等问题
- 运行时同步加载不适合浏览器环境。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快

## RequireJS & AMD（Asynchronous Module Definition）

## SeaJS & CMD（Common Module Definition）

## UMD

## ES Module

## 参考资料
- https://juejin.cn/post/6844903744518389768#heading-7