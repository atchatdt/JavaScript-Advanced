var fs = require('fs');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path, {encoding: 'utf8'},function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
async function abc(){
    let a = await readFilePromise('song1.txt')
    let b = await readFilePromise('song2.txt')
    let c = await readFilePromise('song3.txt')

    console.log(a,b,c)
    console.log('END.....')
}
abc()