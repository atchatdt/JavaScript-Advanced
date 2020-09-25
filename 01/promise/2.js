async function demoPromise(value = 10, data = 15){
    if(value < data){
        return value+ data;
    }else {
        return 'ERROR'
    }
}

let fuc = async() =>{
    await  demoPromise(4,5)
        .then( (data) => console.log(data))
        .catch( (err) => console.log(err) )
    console.log('END....')
}

fuc()


