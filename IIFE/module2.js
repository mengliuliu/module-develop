// module2.js文件
;(function (m1) {
  // 模块中的数据
  const data2 = "我是module2中的数据"
  const func2 = () => {
    console.log("m1.data1", m1.data1)
    console.log("我是module2中的函数")
  }
  func2()
  // 暴露的模块
  window.module2 = { data2, func2 }
})(module1)
