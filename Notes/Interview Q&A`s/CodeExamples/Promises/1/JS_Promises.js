let prom = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if(a == 2){
        resolve('Success');
    }
    else{
        reject('Failed');
    }
})

prom.then((status)=>{
    console.log('This is a '+status,'operation.'); //.then is when it succeeds or resolves.... 
                                                    //and they can be multiple as well.
}).catch((status)=>{
    console.log('This is a '+status,'operation.'); //.catch is when it fails or reject...
})

//Promises are very good to use when you have a operation when its going to take a long time in the background.
//So that you can know when it succeeds then what you wanna do or if it gets failed you catch it and let it know
//how to handle it if it does give an error message or something to user.E.G. Download a picture or a video.


