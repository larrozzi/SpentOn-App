
import React from 'react';
import {NavLink} from 'react-router-dom'; // {} needed because it is named import not a default one


const Header = ()=>(
    <header>
        <h1> Spenton</h1>
        <NavLink to = "/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to = "/create" activeClassName="is-active">Create </NavLink>
        <NavLink to = "/help" activeClassName="is-active">Help </NavLink>
    </header>
)

export default Header;

 
