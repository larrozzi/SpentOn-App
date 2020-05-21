import React from 'react';
import {connect} from 'react-redux'
import {startLogin}  from '../actions/auth' //not used anymore
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {uiConfig} from '../firebase/firebase' 
import * as firebase from 'firebase';

export const LoginPage = ({startLogin}) =>(
    <div className= "page-layout">
        <div className="page-layout__box">
            <h1 className='page-layout__title'> Spenton</h1>
            <p>Adulting is rough!</p>
            {/*<button className='button' onClick= {startLogin}>Login with Google</button>*/}
            <StyledFirebaseAuth 
                uiConfig={uiConfig} 
                firebaseAuth= {firebase.auth()}
            />
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect (undefined, mapDispatchToProps)(LoginPage) //undefined for mapstateToProps