import {firebase, googleAuthProvider} from '../firebase/firebase'

export const login = (uid) => ({
    type:'LOGIN',
    uid
})
export const startLogin = () => {
    return () =>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
        //firebase.auth().signInWithPopup(emailAuthProvider)
        //firebase.auth().signInWithPopup(facebookAuthProvider)  
    }
}
export const logout = () => ({
    type : 'LOGOUT'
})
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}