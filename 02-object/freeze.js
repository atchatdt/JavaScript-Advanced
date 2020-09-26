// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// block override, add, edit, delete

var {
    spacing,
    clear
} = require('../index')


clear()
spacing(1)
var obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42


spacing(2)
var obj = {
    prop() {},
    foo: 'bar'
};

// Before freezing: new properties may be added,
// and existing properties may be changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Freeze.
var o = Object.freeze(obj);

// The return value is just the same object we passed in.
o === obj; // true

// The object has become frozen.
Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = 'quux'; // silently does nothing
// silently doesn't add the property
obj.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
function fail() {
    'use strict';
    obj.foo = 'sparky'; // throws a TypeError
    delete obj.foo; // throws a TypeError
    delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
    obj.sparky = 'arf'; // throws a TypeError
}

fail();

// Attempted changes through Object.defineProperty; 
// both statements below throw a TypeError.
Object.defineProperty(obj, 'ohai', {
    value: 17
});
Object.defineProperty(obj, 'foo', {
    value: 'eit'
});

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
Object.setPrototypeOf(obj, {
    x: 20
})
obj.__proto__ = {
    x: 20
}