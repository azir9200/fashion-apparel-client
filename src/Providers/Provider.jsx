import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app)
export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const [register, setRegister] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    register,
    loading,
    createUser,
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