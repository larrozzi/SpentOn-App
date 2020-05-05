import React from 'react';
import {Router, Route,Switch, Link, NavLink}from 'react-router-dom';

import SpentonDashboardPage from '../components/SpentonDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
//import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'; 
//import {createHistory} from 'history/createBrowserHistory' 
import {createBrowserHistory} from 'history' 
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory();

const AppRouter =()=>(
    <Router history = {history}> {/* this requires a single root element */} 
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component ={SpentonDashboardPage} />  
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} /*:id is used for variables  */ />
                {/*<Route path="/help" component={HelpPage} />*/}
                <Route component ={NotFoundPage}/>
            </Switch>
        </div>  
    </Router>
)
//jsx

export default AppRouter;