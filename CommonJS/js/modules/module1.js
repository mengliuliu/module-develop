// module1.js
const module2 = require("./module2")

const func1 = () => {
  console.log("module2.data2", module2.data2)
  console.log("module1中的func1")
}

module.exports = {
  func1,
}
