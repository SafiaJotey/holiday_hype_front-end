import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [name, setName] = useState('');
    ;
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
   

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
         
            .finally(() => setIsLoading(false));
    }
   


    


    // // observe user state change
    const unsubscribed = useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);



    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        signInUsingGoogle,
        
        isLogin,
        isLoading,
        logout
    }
}

export default useFirebase;
