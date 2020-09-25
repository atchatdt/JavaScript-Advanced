// Arrow function.
// Một số cah1 viết dunction rút gọn

var sum = function(a,b){
    return a+b;
}
var sum2 = (a,b)=>{
    return a+b
}

var sum3 = (a,b)=> a+b;

var square = x=> x*x;

var doSomething = () => Date.now();

console.log(sum(1,2));
console.log(sum2(1,2));
console.log( sum3(1,2));

console.log(square(5));

console.log(doSomething());
