import {createStore} from 'redux';
 
//Action generators - funtions that return action object;

// const add= ({data})=>{
// return data.a + data.b;
// }
// const add= ({a,b}, c)=>{ //deconstructuring in an argument
//     return a + b+c;
//     }
// console.log(add({a:1, b:12},100))

// const incrementCount=(payload={})=>( {  //if payload doesnt exist it default to empty object {}
//         type:'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy:1 
// }) //==->

const incrementCount=({incrementBy=1 }={})=>( {  //1 is the default of increment, incrementBy is an object var, {} is an empty object as default if incrementBy doesnt exist
    type:'INCREMENT',
    // incrementBy:incrementBy
    incrementBy
})

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT' ,
    decrementBy
})  

const setCount=({count}={})=>({ //no default here
    type: 'SET',
    count
})
const resetCount=()=>({
    type:'RESET'
})

// Reducers
//1. Reducers are pure functions -> output is only  determined by only the input passed in and doesnt change anything outside of its scope
//2. never state or action
const countReducer=(state={count:0}, action)=> {
        switch(action.type){
            case 'INCREMENT': 
             //  const incrementBy=typeof action.incrementBy === 'number'? action.incrementBy:1; //if incrementBy is a number, increment by 5, else use 1 as increment 
                return {
              //   count:state.count+incrementBy
              count:state.count+action.incrementBy
            };  
            case 'DECREMENT':
                // const decrementBy =typeof action.decrementBy === 'number' ? action.decrementBy : 1;
                return{  
                count:state.count-action.decrementBy
            }; 
            case 'RESET':
                return{
                    count:0
                }
            case 'SET':
                return{ //return an abject where count is action.count
                    count:action.count
                }
            default:
                return state;
        }
    }

const store = createStore(countReducer);// the main thing we're using redux for, to have data that be used anywhere 

// store.subscribe(()=> {
//     console.log(store.getState());f
// })

const unsubscribe=store.subscribe(()=> {
    console.log(store.getState());
});

//*************actions: an object that gets sent to the store

// increment the count

// store.dispatch({ //method that sends action to the store
//     type:'INCREMENT', //convention in redux for actions, type is necesseray 
//     incrementBy: 5
// });
 
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount()) //default of 1 is used as increment
//unsubscribe();
// store.dispatch({ //method that sends action to the store
//     type:'INCREMENT' //convention in redux for actions
// });

store.dispatch(resetCount());
// store.dispatch({
//     type : 'RESET'
// })

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:101}));
// store.dispatch({
//     type:'SET',
//     count:101
// })







 