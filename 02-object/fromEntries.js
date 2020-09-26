// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
// Chuyển đổi các cập giá trị thành dữ liệu dạng object => key : value
var {
    spacing,
    clear
} = require('../index')

clear()
spacing(1)

let a = Object.fromEntries([
    ['0']
])

console.log(a)