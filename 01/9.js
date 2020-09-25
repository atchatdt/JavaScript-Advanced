//Set timeout

// setTimeout(fn,ms);

// console.log('Start');
// var timeOutId = setTimeout(function(){

//     console.log('Finsh');
// },1000)

// clearTimeout(timeOutId);

// clearInterval
// setInterval(() => {
    
// }, interval);

// var i=0;
// var id = setInterval(() => {
//     ++i;
//     if(i == 3){
//         clearInterval(id);
//     }
//     console.log(i);
// }, 1000); 

function countFrom(a,b){
    return new Promise(function(reqsole, reject){
        if(a > b){
            reject('error');
        }else{
            var kq = a;
            let id = setInterval(() => {
                console.log(kq);

                kq++;
                if(kq > b){
                    clearInterval(id);
                }
            }, 1000);
            console.log(kq);
            reqsole();
           
        }
    })
}

countFrom(1,10)
.then(function(data){
    console.log('Done')
})
.catch(function(err){
    console.log(err);
})