// module1.js
define(function (require, exports, module) {
  const module2 = require('./module2')
  const func1 = () => {
    console.log("module2.data2", module2.data2)
    console.log("module1中的func1")
  }
  exports.func1 = func1
})
