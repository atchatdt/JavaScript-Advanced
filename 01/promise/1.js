function onDone(data){
    console.log(data)
}
function onErr(err){
    console.log(err)
}
function demoPromise(value = 10,data = 15){
    return new Promise ((resolve,reject) => {
       if(value < data){
           resolve(value+data)
       }else {
           reject('ERROR')
       }
    } )
}

// demoPromise(4,2)
// .then(onDone)
// .catch(onErr)
// .then( () => {
//     return demoPromise(1,5)
// })
// .then(onDone)
// .catch(onErr)

// Promise.all([
//     demoPromise(1,5),
//     demoPromise(0,1)
// ])
// .then( (values) =>{
//     console.log(values)
// })
// .catch( (e) => console.log('ERR') )

var a = demoPromise(1,2)
console.log(a.then(an => console.log('Giá trị: '+ an))) // gán 1 biết cho 1 promise => lấy giá trị trả về