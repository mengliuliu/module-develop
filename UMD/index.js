// UMD简单实现
;((global, factory) => {
  //如果 当前的上下文有define函数，并且AMD  说明处于AMD 环境下
  if (typeof define === "function" && define.amd) {
    define(["./module1.js"], factory)
    console.log('index -> amd')
  } else if (typeof exports === "object") {
    //commonjs
    let module1 = require("./module1.js")
    module.exports = factory(module1)
  } else {
    global.module1 = factory(global.moduleA) //直接挂载成 windows 全局变量
  }
})(this, (module1) => {
  module1.func1()
  //本模块的定义
  return {}
})
