
import React from 'react';
import {Link} from 'react-router-dom'; // {} needed because it is named import not a default one
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header = ({startLogout})=>(
    <header className='header'>
        <div className= 'content-container'> 
            <div className='header__content'> {/* using flex to distribute content over space  */}
                <Link className= "header__title" to = "/dashboard" > 
                    <h1> Spenton</h1>
                </Link>
                <button className="button button--link" onClick= {startLogout}> Logout</button>
            </div>
        </div>
    </header>

)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);

 
