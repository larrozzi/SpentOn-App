import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; //can import it with any name
import 'normalize.css/normalize.css'; //for having all browser show the same thing
import './styles/styles.scss';  

const store= configureStore();

console.log(store.getState());
    
// addExpense -> Water bill 
store.dispatch(addExpense({description:'water bill', amount: 4500, createdAt:1900}));
//addExpense -> Gas bill
store.dispatch(addExpense({description:'gaz bill', createdAt:1000}))
//addExpense -> Rent bill
store.dispatch(addExpense({description:'Rent', amount: 109500, createdAt:0}));

//setTextFilter-> bill (2 items) -> (1 item)
//store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

//getVisibleExpenses -> print visibles ones ot screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store= {store}>
    <AppRouter/>
    </Provider>
)
 //ReactDOM.render(routes,document.getElementById('app'));  //routes was a const in the same file 
 ReactDOM.render(jsx,  document.getElementById('app')); // AppRouter is component