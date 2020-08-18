const userLeft = false;
const userWatchingCatVideo = true;

function watchTutorialPromises(){
    return new Promise((resolve,reject) =>{
        if(userLeft){
            reject({
                name:'User Left',
                message:':('
            })
        } else if(userWatchingCatVideo) {
            reject({
                name:'User Watching Var Meme',
                message:'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs Up and Subscribe :)')
        }
    })
}

watchTutorialPromises()
        .then((message) => { 
                console.log('Success:' +message)
        })
        .catch((error) => { 
                console.log(error.name + ' ' + error.message)
        })
//You can compare this with Callback.js and check what change has been made
//Except for some the whole code and logic are same.