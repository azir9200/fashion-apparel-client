import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Provider";


const Signup = () => {
  const { createUser } = useContext(AuthContext);


  const handleRegister = (event) => {

    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    //  create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })

  }
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
              <input type="name" name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Already Have an Account ?  <Link to='/login' >Login</Link> </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;