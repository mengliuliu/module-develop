// UMD简单实现
;((global, factory) => {
  //如果 当前的上下文有define函数，并且AMD  说明处于AMD 环境下
  if (typeof define === "function" && define.amd) {
    define([], factory)
    console.log('module2 -> amd')
  } else if (typeof exports === "object") {
    //commonjs
    module.exports = factory()
  } else {
    global.module1 = factory(global.moduleA) //直接挂载成 windows 全局变量
  }
})(this, () => {
  const data2 = "我是module2中的数据"
  //本模块的定义
  return { data2 }
})
