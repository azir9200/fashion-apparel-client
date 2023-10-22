import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";


const Login = () => {
  const [user, signOut] = useContext(AuthContext);

  // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider()


  const handleLogin = (event) => {

    // signInWithPopup(auth, provider)
    //   .then(result => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })


    const handleSignOut = () => {
      signOut()
        .then(result => {
          console.log(result);

        })
        .catch(error => {
          console.log(error)
        })
    }


    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">

              {user ?
                <button onClick={handleSignOut} className="btn btn-primary"  >Signout </button>
                :
                <button className="btn btn-primary">Login</button>
              }

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Already Have an Account ?  <Link to='/register' >Register</Link> </a>

              </label>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;