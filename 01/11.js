
// Array.from(arguments) => arguments to array
function sum(){
    // let result =0; 
    // for(let i=0; i< arguments.length; i++){
    //     result += arguments[i];
    // }
    // return result;

    const numbers = Array.from(arguments);
    return numbers.reduce((sum,value) => sum+value, 0)
}

console.log(sum(1,2,3));