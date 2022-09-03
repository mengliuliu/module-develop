// module1.js
define(["./module2.js"], function (module2) {
  const func1 = () => {
    console.log("module2.data2", module2.data2)
    console.log("module1中的func1")
  }
  return { func1 } // 暴露模块
})
