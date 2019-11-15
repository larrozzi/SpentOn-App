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
import 'react-dates/lib/css/_datepicker.css';

const store= configureStore();

console.log(store.getState());
    

//setTextFilter-> bill (2 items) -> (1 item)
//store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)


const state = store.getState();


const jsx = (
    <Provider store= {store}>
    <AppRouter/>
    </Provider>
)
 //ReactDOM.render(routes,document.getElementById('app'));  //routes was a const in the same file 
 ReactDOM.render(jsx,  document.getElementById('app')); // AppRouter is component