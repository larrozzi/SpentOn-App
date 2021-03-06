//import * as firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as firebaseui from 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseConfig = {
    apiKey: "AIzaSyBDogoE0rV4xgNsWV65CVg_9Ju-6er97y4",
    authDomain: "spenton-cfa2b.firebaseapp.com",
    databaseURL: "https://spenton-cfa2b.firebaseio.com",
    projectId: "spenton-cfa2b",
    storageBucket: "spenton-cfa2b.appspot.com",
    messagingSenderId: "511411283769",
    appId: "1:511411283769:web:4fcc5a86397d7d3221eae8",
    measurementId: "G-6T7GJM40HF"
};

app.initializeApp(firebaseConfig);
//app.analytics();


const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
        app.auth.GoogleAuthProvider.PROVIDER_ID,
        app.auth.FacebookAuthProvider.PROVIDER_ID,
        app.auth.EmailAuthProvider.PROVIDER_ID,
        app.auth.TwitterAuthProvider.PROVIDER_ID,
        app.auth.GithubAuthProvider.PROVIDER_ID
  ],
}

const database = app.database();
const googleAuthProvider = new app.auth.GoogleAuthProvider();

const emailAuthProvider = app.auth.EmailAuthProvider.PROVIDER_ID
const facebookAuthProvider = app.auth.FacebookAuthProvider.PROVIDER_ID
const twitterAuthProvider = app.auth.TwitterAuthProvider.PROVIDER_ID
const githubAuthProvider = app.auth.GithubAuthProvider.PROVIDER_ID

// ui.start('#firebaseui-auth-container', {
//     signInOptions:
//     [
//       {
//         provider:emailAuthProvider,
//         signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
//       },
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     facebookAuthProvider,
//     //twitterAuthProvider,
//     //githubAuthProvider
//     ]
//   });

// const ui = new firebaseui.auth.AuthUI(firebase.auth())

export {
    //firebase,
    app, 
    uiConfig,
    googleAuthProvider, 
    emailAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    githubAuthProvider,
    database as default
};


//fireabase doesn't have arrays so we make a list of objects with push

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses =[]
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
// });



// database.ref('expenses')
//     .on('value',(snapshot) => { // on doesnt support promises so the snapshot is inserted as an argument
//         const expenses =[]
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })
    
// // child_removed
// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added fires when a new expense is added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description:'24" monitor',
//     amount:15520,
//     createdAt:'2020-05-03',
//     note:'refurbished deal'
// })
// database.ref('expenses').push({
//     description:'longboard',
//     amount:13000,
//     createdAt:'2020-05-03',
//     note:''
// })
// database.ref('expenses').push({
//     description:'mouse and keyboard',
//     amount:4483,
//     createdAt:'2020-05-03',
//     note:'refurbished deal'
// })

// database.ref().on('value', (snapshot)=>{
//     const valObj= snapshot.val();
//     console.log(`${valObj.name} is a ${valObj.job.title} at ${valObj.job.Company}`)
// })

//const onJobTitleCHange = database.ref('jobTitle').

// // to subsribe to reading the data
// const onValueChange = database.ref().on('value',(snapshot) => {
// console.log(snapshot.val());
// },(e)=>{ // error in case of fetching data in subscription
//     console.log('Error with data fetching', e); 
// });

// setTimeout(()=>{
//     database.ref('age').set(30);
// },3500)

// setTimeout(()=>{
//     database.ref().off(onValueChange); //unsubscribe
// },7000)

// setTimeout(()=>{
//     database.ref('age').set(31);
// },10500)

//// to fetch data only one time
// database.ref()
//     .once('value') // once returns a promise like set
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => { 
//         console.log('reading data unsuccessful',e);
//     })


//   database.ref().set({
//       name:'Yassine Laaroussi',
//       age :28,
//       stresslevel:6,
//       job:{
//           title:'Software developer',
//           Company:'Airbnb'
//       },
//       location :{
//           city:'Los Angeles',
//           country:'United States'
//       },
//   }).then(()=>{
//       console.log('data was saved');
//   }).catch((e)=>{
//       console.log('this failed',e);
//   });

//  // database.ref('isSingle').set(null) // different way of removing data 

// // database.ref('isSingle')
// //     .remove()
// //     .then(()=>{
// //         console.log('isSingle was removed')
// //     }).catch((e)=>{
// //         console.log('removing isSingle failed')
// // })

// database.ref().update({
//    stressLevel: 9,
//    'job/Company':'Amazon',
//    'location/city':'Seattle'
// })

