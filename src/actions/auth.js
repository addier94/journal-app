import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
          login( user.uid, user.displayName )
        )
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ', errorMessage)
      });
  }
}

export const startRegisterWithEmailPasswordName = ( email, password, name) => {
  return ( dispatch ) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then( async({user}) => {
        await updateProfile(user, { displayName: name })
        
        dispatch(
          login( user.uid, user.displayName )
        )
      })
      .catch(err => {
        console.log(err.message);
      })
  }
}

export const startGoogleLogin = () => {
  return ( dispatch ) => {
      const auth = getAuth();
      signInWithPopup(auth, googleAuthProvider)
        .then(({ user }) => {
          dispatch(login(user.uid, user.displayName))
        })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})