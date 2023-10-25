import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userLogin);

  const [loginError, setLoginError] = useState(null);
  console.log(loginError)
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email");
    const userPassword = form.get("password");

    try {
      const userCredential = await userLogin(userEmail, userPassword);
      const user = userCredential.user;
      console.log(user);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const handleSignInWithGoogle = async () => {
    setLoginError(null);
    googleLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userEmail = user.email;
        const userName = user.displayName;
        const userPhotoUrl = user.photoURL;

        const newUser = { userEmail, userName, userPhotoUrl, userCart: [] };

        fetch(`http://localhost:5000/addNewCustomer`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        console.log("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(`Invalid Email/Password. Please Enter Correctly. `);
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card  shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center items-center mt-4 font-bold">
            Login now!
          </h1>
          <button
            onClick={handleSignInWithGoogle}
            className="btn-info py-4 mt-4 mx-2 rounded-3xl font-bold"
          >
            Login With Google
          </button>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                <Link className="text-xl text-blue-500" to={"/register"}>
                  or Register Now
                </Link>
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
