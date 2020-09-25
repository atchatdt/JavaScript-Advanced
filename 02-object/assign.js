// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const {
    spacing,
    clear
} = require('../index')


clear()
spacing(1)

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    c: 2,
    d: 4,
    a: 5
}
let obj3 = Object.assign(obj1, obj2)
console.log(obj3)
obj3.a = 10
console.log(obj3)
console.log({
    obj1
})
console.log({
    obj2
})


spacing(2)
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.


spacing(3)
const o4 = { a: 1 };
const o5 = { [Symbol('foo')]: 2 };

const obj11 = Object.assign({}, o4, o5);
console.log(obj11); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj11); // [Symbol(foo)]


spacing(4)
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj12 = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj12); // { "0": "a", "1": "b", "2": "c" }