import React from 'react';
import {BrowserRouter, Route,Switch, Link, NavLink}from 'react-router-dom';

import Header from '../components/Header';
import SpentonDashboardPage from '../components/SpentonDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter =()=>(
    <BrowserRouter> {/* this requires a single root element */} 
    <div>
     <Header/> 
        <Switch>
            <Route path="/" component ={SpentonDashboardPage} exact={true}  /*javascript */ />  
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} /*:id is used for variables  */ />
            <Route path="/help" component={HelpPage} />
            <Route component ={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
)
//jsx

export default AppRouter;