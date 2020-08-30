const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 Recorded');
})
const recordVideoTwo = new Promise((resolve,reject) => {
    resolve('Video 2 Recorded');
})
const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 Recorded');
})
//CASE 1:
//In PromiseAll we can`t see but all of them are running all at the same time.So if recordOne takes longer the other two won`t wait for it and 
//will finish there job at same time.
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})
//.then will print all the successful messages from recordVideoOne and all .catch is same but not written cause there are no cases for reject

//CASE 2:
//If you want to see for e.g. who finishes first and how its getting done first but not all only one....Use Promise.race like following:
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})
