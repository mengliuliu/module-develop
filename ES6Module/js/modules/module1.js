// module1.js
import data2 from "./module2.js"
const func1 = () => {
  console.log("module2.data2", data2)
  console.log("我是module1中的函数")
}
export { func1 }
