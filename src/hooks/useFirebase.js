import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => setUser(res.user))
            .catch(error => console.log(error))

    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);

        })
    },[])

    const handelSignOut=()=>{
        signOut(auth).then(()=>{}).catch(()=>{})
    }
    return { user, signInWithGoogle, handelSignOut}
}

export default useFirebase;