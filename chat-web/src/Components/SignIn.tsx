import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// import { useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore';
// const auth = firebase.auth();
const auth = firebase.auth();
const SignIn = () =>{
    const [user] = useAuthState(auth as any);
    const signInWithGoogle = () =>{
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider);
    }
    return (
      

        <div>

             <button onClick={signInWithGoogle}>
                Sign in with Google
            </button> 
        </div>
    )
        
    
}
export default SignIn;