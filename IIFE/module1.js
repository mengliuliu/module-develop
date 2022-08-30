// module1.js文件
;(function () {
  // 模块中的数据
  const data1 = "我是module1中的数据"
  const func1 = () => {
    console.log("我是module1中的函数")
  }
  // 暴露的模块
  window.module1 = { data1, func1 }
})()
