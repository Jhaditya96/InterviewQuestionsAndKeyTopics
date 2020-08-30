const userLeft = true;
const userWatchingCatVideo = true;

function watchTutorialCallback(callback,errorCallback){ //Callbacks from line 20----
    if(userLeft){
        errorCallback({
            name:'User Left',
            message:':('
        })
    } else if(userWatchingCatVideo) {
        errorCallback({
            name:'User Watching Var Meme',
            message:'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs Up and Subscribe :)')
    }
}

watchTutorialCallback((message) => { //This callback is for success 
    console.log('Success:' +message)
}, (error) => { //This callback is for failures.It checks for both and input given decides what`s it gonna be...
    console.log(error.name + ' ' + error.message)
})


//But this has some descrepencies so rather using Callbacks Use Promises which is in Promises.js