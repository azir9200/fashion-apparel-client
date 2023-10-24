import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app)
export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  // const [register, setRegister] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);




  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password)

  }

  const signOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('changes', currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const userInfo = {
    // register,
    user,
    loading,
    createUser,
    signOut,
    userLogin,
  }

  return (
    <div>
      <AuthContext.Provider value={userInfo} >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default Provider;