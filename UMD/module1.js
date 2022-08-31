// UMD简单实现
;((global, factory) => {
  //如果 当前的上下文有define函数，并且AMD  说明处于AMD 环境下
  if (typeof define === "function" && define.amd) {
    define(["./module2.js"], factory)
    console.log('module1 -> amd')
  } else if (typeof exports === "object") {
    //commonjs
    let module2 = require("./module2.js")
    module.exports = factory(module2)
  } else {
    global.module1 = factory(global.moduleA) //直接挂载成 windows 全局变量
  }
})(this, (module2) => {
  const func1 = () => {
    console.log("module2.data2", module2.data2)
    console.log("module1中的func1")
  }
  //本模块的定义
  return { func1 }
})
