
import React from 'react';
import {NavLink} from 'react-router-dom'; // {} needed because it is named import not a default one
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header = ({startLogout})=>(
    <header>
        <h1> SpentOn</h1>
        <NavLink to = "/dashboard" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to = "/create" activeClassName="is-active">Create Expense </NavLink>
        {/*<NavLink to = "/help" activeClassName="is-active">Help </NavLink>*/}
        <button onClick= {startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);

 
