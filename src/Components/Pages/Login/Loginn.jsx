import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useState } from "react";


const Loginn = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      {user ?
        <button onClick={handleSignin} > Login </button> :
        <button onClick={handleSignOut} > Signout </button>}
    </div>
  );
};

export default Loginn;