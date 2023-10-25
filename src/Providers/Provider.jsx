/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleAuthProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logInUser = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(true);
  };

  const googleLogIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);

      return response;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);

      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        googleLogIn,
        loading,
        logInUser,
        userLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
