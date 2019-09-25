//spread
const obj1 ={
    a:1,
    b:2,
    c:3,
    d:{
        e:4
    }
}

const obj2 = {
    ...obj1,
    z:4
}
obj2.a=5;
console.log(obj1);
console.log(obj2);
