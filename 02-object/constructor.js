// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

const {
    spacing,
    clear
} = require('../index')
// Mọi object đều có thuộc tính này
// Ngoại trừ dùng Object.create(null)

/**
 * 1
 */

// let o = {}
// o.constructor === Object // true

// let o = new Object
// o.constructor === Object // true

// let a = []
// a.constructor === Array // true

// let a = new Array
// a.constructor === Array // true

// let n = new Number(3)
// n.constructor === Number // true


/*
 * 2
 */
clear()
spacing(1)
let Animal = function (name, weight, height) {
    this.name = name
    this.weight = weight
    this.height = height
}

Animal.prototype.talk = function (sound = 'gau gau') {
    console.log(this.name + ' : ' + sound);
}

let dog = new Animal('sco', 5, 0.5);
dog.talk()



// 3
clear()
spacing(2)

function Type() {}

let types = [
    new Array(),
    [],
    new Boolean(),
    true, // remains unchanged
    new Date(),
    new Error(),
    new Function(),
    function () {},
    Math,
    new Number(),
    1, // remains unchanged
    new Object(),
    {},
    new RegExp(),
    /(?:)/,
    new String(),
    'test' // remains unchanged
]

for (let i = 0; i < types.length; i++) {
    types[i].constructor = Type
    types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()]
}

// console.log(types.join('\n'))
// console.log(types)


spacing(3)

function Parent(name) {
    this.name = name
    /* ... */
}
Parent.prototype.parentMethod = function parentMethod() {}

Parent.prototype.getName = function () {
    return this.name
}

function Child() {
    Parent.call(this) // Make sure everything is initialized properly
}
Child.prototype = Object.create(Parent.prototype) // re-define child prototype to Parent prototype

Child.prototype.constructor = Child // return original constructor to Child
Child.prototype.getNameChil = function(){return this.name}
let pa = new Parent("Kuro");
let ch = new Child("kazuto")
console.log(pa.getName())
console.log(ch)