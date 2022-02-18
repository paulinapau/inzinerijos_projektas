import React, { useEffect, useState } from 'react';
import './App.css';

// firebase
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

 import firebase from 'firebase/compat/app';
 import 'firebase/firestore';
// import 'firebase/auth';

import { useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Components
//import SignIn from './Components/SignIn'
import ChatView from './Components/ChatView';


firebase.initializeApp({
  apiKey: "AIzaSyD7rW74V3X85xqQ_bq-oq1Q3OMgojpUdwU",
  authDomain: "chat-2cf53.firebaseapp.com",
  projectId: "chat-2cf53",
  storageBucket: "chat-2cf53.appspot.com",
  messagingSenderId: "725126558582",
  appId: "1:725126558582:web:cbf7ca5b39bba488b5c057",
  measurementId: "G-G6NM2WFGDT"
})


//const firestore = firebase.firestore();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const SignIn = () =>{
  const signInWithGoogle = () =>{
          
    signInWithPopup(auth, provider)
    .then((result:any) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential !== null){
      const token = credential.accessToken;
      }
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error:any) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    
      <div>

          <button onClick={signInWithGoogle}>
              Sign in with Google
          </button>
      </div>
  )
      
  

}
//const auth = firebase.auth();
//const firestore = firebase.firestore();
 const App = () => {
  //  let user;
  // useEffect(() => {
  //   // Update the document title using the browser API
  //  user = getAuth().currentUser;
  //  console.log(user)
  // },[]);
 
  //const [user] = useAuthState(auth as any);
  const user = getAuth().currentUser;
  const [userState, setUserState] = useState(false)
const changeState = () => {
  getAuth().currentUser ? setUserState(true) : setUserState(false)
  console.log(userState)
}

 
  setInterval(changeState, 1000);

  const signOutUser = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    setUserState(false)
   }
  return (
    <div className="App">
     

       <section>
      {userState ? <ChatView/> : <SignIn />}
      </section> 
      <button onClick={signOutUser}>Log out</button>

    </div>
  );
}
export default App;

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }