const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is my resolved data'); can only resolve once, and either resolve or rreject
        resolve({
            name: 'Yassine',
            age: 28
        }) 
        //reject('something went wrong');
    },5000);
});  
 
console.log('before');

promise.then((data)=>{
console.log(data);
});  

// promise.then((data)=>{
//     console.log('1',data);
// }).catch((error)=> {
//     console.log('error: ', error);
// })

console.log('after');

