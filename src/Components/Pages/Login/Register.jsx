import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  console.log(passwordError);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email").toLocaleLowerCase();
    const userName = form.get("name");
    const userPhotoUrl = form.get("photoUrl");
    const userPassword = form.get("password");
    const newUser = { userEmail, userName, userPhotoUrl, userCart: [] };

    if (userPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 6 characters long",
      });
      return;
    }

    if (!/[A-Z]/.test(userPassword)) {
      setPasswordError("Password must contain at least one capital letter");
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one capital letter",
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) {
      setPasswordError("Password must contain at least one special character");
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one special character",
      });
      return;
    }

    setPasswordError("");

    createUser(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        fetch(`https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/addNewCustomer`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold">Please Register Here</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Already Have an Account? <Link to="/login">Login</Link>{" "}
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
