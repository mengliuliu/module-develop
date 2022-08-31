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
