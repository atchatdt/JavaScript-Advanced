// __proto__ => loại bỏ, không sửa dụng được trong node
// trình duyệt vẫn dùng được => tuỳ trình duyệt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

let obj1 = function(){};
obj1.prototype.abc = function(){
    console.log("Hello world")
}
obj1.__proto__.xyz = function(){
    console.log("Hello world")
}
let x = new obj1();
x.abc()
x.xyz()