// REST có thể thay cho arguments
// rest => các phần tử thành array

// function log(a,...numbers){

//     console.log(a);
//     console.log(numbers)
//     console.log(arguments);
// }
// log(1,2,3,4);

function sum(...numbers){
    return numbers.reduce((x,y)=> x+y);
}
console.log(sum(1,2,3));

function str(separator,...strings){

    return strings.join(separator);
}
console.log(str('.','a','b','c'));