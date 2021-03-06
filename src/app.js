import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses, removeExpense} from './actions/expenses';
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses'; //can import it with any name
import 'normalize.css/normalize.css'; //for having all browser show the same thing
import './styles/styles.scss';  
import 'react-dates/lib/css/_datepicker.css';
import {app} from'./firebase/firebase';
import LoadingPage from './components/LoadingPage';
 
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

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx,  document.getElementById('app'));
        hasRendered=true; 
    }
};

ReactDOM.render(<LoadingPage />,  document.getElementById('app'));

app.auth().onAuthStateChanged((user) => {
    if (user){
        store.dispatch(login(user.uid))
        //console.log('uid', user.uid)
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    }
    else {
        //console.log('log out')
        store.dispatch(logout())
        renderApp()
        history.push('/')
        
    }
})

 //ReactDOM.render(routes,document.getElementById('app'));  //routes was a const in the same file 
 