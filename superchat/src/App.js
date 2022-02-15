import React from 'react';
import './App.css';
/*
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB6lP1--I988eyT4IXHjVIHL9IT6C3ndgg",
  authDomain: "chatprojektas.firebaseapp.com",
  projectId: "chatprojektas",
  storageBucket: "chatprojektas.appspot.com",
  messagingSenderId: "1087383937706",
  appId: "1:1087383937706:web:3faf2c5313cdee57f1e6d3"
})
const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with google</button>
  )
}
function SignOut() {}
function ChatRoom() {}
export default App;
