// index.js
;(function () {
  require.config({
    // baseUrl: "js/", //基本路径 出发点在根目录下
    // paths: { //  映射: 模块标识名: 路径
      
    // },
  })
  require(["./js/modules/module1.js"], function (module1) {
    module1.func1()
  })
})()
