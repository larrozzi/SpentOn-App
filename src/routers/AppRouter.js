import React from 'react';
import {Router, Route,Switch, Link, NavLink}from 'react-router-dom';

import SpentonDashboardPage from '../components/SpentonDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'; 
//import {createHistory} from 'history/createBrowserHistory' 
import {createBrowserHistory} from 'history' 
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory();

const AppRouter =()=>(
    <Router history = {history}> {/* this requires a single root element */} 
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component ={SpentonDashboardPage} />  
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} /*:id is used for variables  */ />
                <PublicRoute component ={NotFoundPage}/>
            </Switch>
        </div>  
    </Router>
)
//jsx

export default AppRouter;