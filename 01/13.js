// apply(this, <tham số>)
function greeting(){
    console.log(`Hi! ${this.name}. I am ${this.age}`);
}
var a = {
    name: 'A',
    age: 28
}

greeting.apply(a);

function sum(){

    const numbers= Array.from(arguments);
    return numbers.reduce((x,y)=> x+y,0);
}

function average(){

    const value = sum.apply(null,arguments);
    return value/arguments.length;
}
console.log(average(1,2,3));